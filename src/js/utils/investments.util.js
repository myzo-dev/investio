const calculateInvestmentsSum = (investments) => {
    let sum = 0
    
    investments.forEach(investment => {
        sum += Number(investment.value)
    })

    return sum
}

const createInvestmentsItem = (investment, sum) => {
    const investmentPercentage = (investment.value / sum * 100).toFixed(2)
    const investmentElementTemplate = `
        <li class="investments-section-list-item p-16 flex justify-between items-center first:rounded-t-16 last:rounded-b-16 rounded-8 bg-neutral-700">
            <article class="gap-8 flex items-center">
                <p class="mr-8 text-subheading font-semibold">${investment.name}</p>
                <small class="px-6 py-2 rounded-4 bg-primary-400">${investment.value}€</small>
                <small class="px-6 py-2 rounded-4 bg-primary-400">${investmentPercentage}%</small>
            </article>

            <aside class="space-x-8">
                <button class="edit-button" type="button">Edit</button>
                <button class="delete-button" type="button">Delete</button>
            </aside>
        </li>
    `

    const parser = new DOMParser()
    const document = parser.parseFromString(investmentElementTemplate, 'text/html')
    const element = document.body.firstChild

    return element
}

const investmentsSection = document.querySelector('.investments-section')
const investmentsSectionList = investmentsSection.querySelector('.investments-section-list')
const investmentsSectionSum = investmentsSection.querySelector('.investments-section-sum')

const deleteInvestment = (investmentID, investments) => {
    if (confirm('Naozaj chcete vymazať investíciu?')) {
        const filteredInvestments = investments.filter(investment => investment.id !== investmentID)
        updateInvestmentsList(filteredInvestments)
    }
}

export let investments = JSON.parse(localStorage.getItem('investments')) || []

export const updateInvestmentsList = (newInvestments) => {
    investments = newInvestments
    localStorage.setItem('investments', JSON.stringify(investments))

    const investmentsSum = calculateInvestmentsSum(investments)

    investmentsSectionSum.textContent = `${investmentsSum}€` // Update investments sum text
    investmentsSectionList.innerHTML = '' // Reset list element

    investments.forEach(investment => {
        const element = createInvestmentsItem(investment, investmentsSum)
        const deleteButton = element.querySelector('.delete-button')

        deleteButton.addEventListener('click', () => deleteInvestment(investment.id, investments))

        investmentsSectionList.appendChild(element)
    })
}