import { investments } from '../utils/investments-functions'
import { renderInvestmentsList } from '../utils/investments-dom'

const investmentsList = () => {
	renderInvestmentsList(investments)
}

export default investmentsList
