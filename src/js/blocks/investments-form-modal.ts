const investmentsFormModal = () => {
	const investmentsFormModalElement = document.querySelector('.investments-form-modal') as HTMLElement
	const investmentsFormModalButton = document.querySelector('.investments-form-modal-button') as HTMLButtonElement

	const toggleModal = () => {
		investmentsFormModalElement.classList.toggle('hidden')
		investmentsFormModalElement.classList.toggle('flex')
	}

	investmentsFormModalButton.addEventListener('click', toggleModal)

	investmentsFormModalElement.addEventListener('click', (event: MouseEvent) => {
		if (event.target === investmentsFormModalElement) {
			toggleModal()
		}
	})
}

export default investmentsFormModal
