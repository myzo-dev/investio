import { Investment } from '../../types'
import { renderInvestmentsList } from './investments-dom'

type InvestmentChartData = {
	values: number[]
	colors: string[]
}

export let investments: Investment[] = JSON.parse(localStorage.getItem('investments') || '[]')
export let investmentsSum: number = calculateInvestmentsSum(investments)
export let investmentsChartData: InvestmentChartData = getInvestmentsChartData(investments)

const investmentsSectionList = document.querySelector('.investments-section-list') as HTMLUListElement
const investmentsSectionSum = document.querySelector('.investments-section-sum') as HTMLElement

investmentsSectionSum.textContent = `${investmentsSum.toString()}€`

function updateInvestmentsList(newInvestments: Investment[]) {
	investments = newInvestments
	localStorage.setItem('investments', JSON.stringify(newInvestments))

	investmentsChartData = getInvestmentsChartData(investments)
	investmentsSum = calculateInvestmentsSum(investments)
	investmentsSectionSum.textContent = `${investmentsSum.toString()}€`
	investmentsSectionList.innerHTML = ''

	renderInvestmentsList(investments)
}

function calculateInvestmentsSum(investments: Investment[]): number {
	let sum = 0

	investments.forEach((investment) => {
		sum += Number(investment.value)
	})

	return sum
}

function getInvestmentsChartData(investments: Investment[]): InvestmentChartData {
	const values: number[] = []
	const colors: string[] = []

	investments.forEach(({ value, color }) => {
		values.push(value)
		colors.push(color)
	})

	return { values, colors }
}

export const addInvestment = (newInvestment: Investment) => {
	const updatedInvestments: Investment[] = [newInvestment, ...investments]
	updateInvestmentsList(updatedInvestments)
}

export const updateInvestment = (updatedInvestment: Investment) => {
	const updatedInvestments: Investment[] = investments.map((investment) => {
		return investment.id === updatedInvestment.id ? updatedInvestment : investment
	})

	updateInvestmentsList(updatedInvestments)
}

export const removeInvestment = (investmentID: string) => {
	const updatedInvestments: Investment[] = investments.filter((investment) => investment.id !== investmentID)

	if (!confirm('Naozaj chcete vymazať investíciu?')) return

	updateInvestmentsList(updatedInvestments)
}

export const generateRandomColor = (): string => {
	const color = Math.floor(Math.random() * 16777215).toString(16)
	return `#${color.padStart(6, '0')}`
}
