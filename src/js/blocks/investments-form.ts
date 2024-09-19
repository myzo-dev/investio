import { v4 as uuidv4 } from 'uuid'
import { Investment } from 'src/types'
import { addInvestment, generateRandomColor } from '../utils/investments-functions'

const investmentsForm = () => {
	/**
	 * Form Modal
	 */
	const investmentsFormModalElement = document.querySelector('.investments-form-modal') as HTMLElement
	const investmentsFormModalButton = document.querySelector('.investments-form-modal-button') as HTMLButtonElement

	const toggleModal = () => {
		investmentsFormModalElement.classList.toggle('hidden')
		investmentsFormModalElement.classList.toggle('flex')
	}
	if (investmentsFormModalElement && investmentsFormModalButton) {
		investmentsFormModalButton.addEventListener('click', toggleModal)

		investmentsFormModalElement.addEventListener('click', (event: MouseEvent) => {
			if (event.target === investmentsFormModalElement) {
				toggleModal()
			}
		})
	}

	/**
	 * Form Events
	 */
	const investmentsFormElement = document.querySelector('.investments-form') as HTMLFormElement

	if (investmentsFormElement) {
		const handleSubmitForm = (event: SubmitEvent) => {
			event.preventDefault()

			const targetedForm = event.target as HTMLFormElement
			const formData: any = new FormData(targetedForm)
			const newInvestment = Object.fromEntries(formData) as Investment

			if (!newInvestment.name || !newInvestment.value) {
				return alert('Vyplňte všetky políčka.')
			}

			if (isNaN(newInvestment.value)) {
				return alert('Hodnota musí byť číslo.')
			}

			if (newInvestment.value <= 0) {
				return alert('Hodnota musí väčšia ako 0.')
			}

			newInvestment.id = uuidv4().toString()
			newInvestment.color = generateRandomColor()

			targetedForm.reset()

			toggleModal()
			addInvestment(newInvestment)
		}

		investmentsFormElement.addEventListener('submit', handleSubmitForm)

		investmentsFormElement.addEventListener('keypress', (event: KeyboardEvent) => {
			if (event.key === 'Enter') {
				event.preventDefault()
				investmentsFormElement.dispatchEvent(new Event('submit'))
			}
		})
	}
}

export default investmentsForm
