import { v4 as uuidv4 } from 'uuid'
import { investments, updateInvestmentsList } from './utils/investments.util'

// Initial render
updateInvestmentsList(investments)

const investmentsFormModal = document.querySelector('.investments-form-modal')
const investmentsFormModalButton = document.querySelector('.investments-form-modal-button')

const toggleModal = () => {
    investmentsFormModal.classList.toggle('hidden')
    investmentsFormModal.classList.toggle('flex')
}

investmentsFormModalButton.addEventListener('click', () => {
    toggleModal()
})

investmentsFormModal.addEventListener('click', (event) => {
    // Close if clicked outside of form
    if (event.target === investmentsFormModal) {
        toggleModal()
    }
})

const investmentsForm = document.querySelector('.investments-form')

investmentsForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const formData = new FormData(event.target)
    const newInvestment = Object.fromEntries(formData)

    if (!newInvestment.name || !newInvestment.value) {
        return alert('Vyplňte všetky políčka')
    }

    if (isNaN(newInvestment.value)) {
        return alert('Hodnota musí byť číslo')
    }
    
    newInvestment.id = uuidv4()

    const updatedInvestments = [newInvestment, ...investments]

    event.target.reset()

    updateInvestmentsList(updatedInvestments)
    toggleModal()
})
