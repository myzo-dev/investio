import Chart from 'chart.js/auto'
import { investmentsChartData } from '../utils/investments-functions'

let chart: any = null

const renderGraph = () => {
	const graphElement = document.getElementById('investments-chart') as HTMLCanvasElement

	const data = {
		datasets: [
			{
				label: 'Hodnota v (€)',
				data: investmentsChartData.values,
				backgroundColor: investmentsChartData.colors,
			},
		],
	}

	if (chart) {
		chart.data = data
		chart.update()
	} else {
		chart = new Chart(graphElement, {
			type: 'pie',
			data: data,
		})
	}
}

export default renderGraph
