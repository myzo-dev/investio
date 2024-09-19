import { investmentsSum, updateInvestment, removeInvestment } from './investments-functions'
import renderGraph from './investments-graph'
import type { Investment } from '../../types'

export const createInvestmentsItem = (investment: Investment, sum: number): HTMLElement => {
	const investmentPercentage = ((investment.value / sum) * 100).toFixed(2)
	const investmentElementTemplate = `
        <li class="investments-section-list-item p-16 first:rounded-t-16 last:rounded-b-16 rounded-8 bg-neutral-700">
            <form class="investments-form-edit hidden justify-between md:items-center flex-col md:flex-row">
                <div class="gap-8 flex items-center">
                    <input class="p-0 w-full text-subheading font-semibold border-none rounded-4 bg-neutral-600" type="text" name="name" value="${investment.name}" required>
                    <input class="px-6 w-full py-2 text-sm rounded-4 border-none" type="number" name="value" value="${investment.value}" style="background-color: ${investment.color};" required>
                </div>

                <aside class="space-x-8 mt-16 md:mt-0 flex">
                    <button class="px-8 py-4 w-full text-xs md:text-sm rounded-4 bg-neutral-500 hover:bg-neutral-400 transition-colors" type="submit">Uložiť</button>
                    <button class="cancel-button px-8 py-4 w-full text-xs md:text-sm rounded-4 bg-neutral-500 hover:bg-neutral-400 transition-colors" type="button">Zrušiť</button>
                </aside>
            </form>

            <div class="investments-list-item-data flex justify-between md:items-center flex-col md:flex-row">
                <article class="gap-8 flex justify-between md:justify-normal items-center">
                    <p class="mr-8 text-subheading font-semibold">${investment.name}</p>

                    <div class="space-x-8 flex">
                        <small class="px-6 py-2 rounded-4" style="background-color: ${investment.color};">${investment.value}€</small>
                        <small class="px-6 py-2 rounded-4 bg-neutral-500 hover:bg-neutral-400 transition-colors">${investmentPercentage}%</small>
                    </div>
                </article>
                
                <aside class="space-x-8 mt-16 md:mt-0 flex">
                    <button class="edit-button px-8 py-4 w-full text-xs md:text-sm rounded-4 bg-neutral-500 hover:bg-neutral-400 transition-colors" type="button">Upraviť</button>
                    <button class="delete-button px-8 py-4 w-full text-xs md:text-sm rounded-4 bg-[#ec6b8a] hover:bg-[#f296ac] transition-colors" type="button">Vymazať</button>
                </aside>
            </div>
        </li>
    `

	const parser = new DOMParser()
	const document = parser.parseFromString(investmentElementTemplate, 'text/html')
	const element = document.body.firstChild as HTMLElement

	return element
}

const investmentsSectionList = document.querySelector('.investments-section-list') as HTMLUListElement

export const renderInvestmentsList = (investments: Investment[]) => {
	if (!investmentsSectionList) return

	investments.forEach((investment) => {
		const element = createInvestmentsItem(investment, investmentsSum) as HTMLLIElement

		const deleteButton = element.querySelector('.delete-button') as HTMLButtonElement

		deleteButton.addEventListener('click', () => {
			removeInvestment(investment.id)
		})

		const editButton = element.querySelector('.edit-button') as HTMLButtonElement
		const formEdit = element.querySelector('.investments-form-edit') as HTMLFormElement
		const investmentData = element.querySelector('.investments-list-item-data') as HTMLDivElement

		const toggleFormAndData = () => {
			formEdit.classList.toggle('flex')
			formEdit.classList.toggle('hidden')

			investmentData.classList.toggle('flex')
			investmentData.classList.toggle('hidden')
		}

		editButton.addEventListener('click', () => {
			setTimeout(() => {
				formEdit.querySelector('input')?.focus()
			}, 0)

			toggleFormAndData()
		})

		formEdit.addEventListener('submit', (event: SubmitEvent) => {
			event.preventDefault()

			const targetedForm = event.target as HTMLFormElement
			const formData: any = new FormData(targetedForm)
			const updatedInvestment = Object.fromEntries(formData) as Investment

			if (!updatedInvestment.name || !updatedInvestment.value) {
				return alert('Vyplňte všetky políčka.')
			}

			if (isNaN(updatedInvestment.value)) {
				return alert('Hodnota musí byť číslo.')
			}

			updatedInvestment.id = investment.id
			updatedInvestment.color = investment.color

			toggleFormAndData()
			updateInvestment(updatedInvestment)
		})

		const cancelEditButton = element.querySelector('.cancel-button') as HTMLButtonElement

		cancelEditButton.addEventListener('click', () => {
			toggleFormAndData()
			formEdit.reset()
		})

		investmentsSectionList.appendChild(element)
	})

	renderGraph()
}
