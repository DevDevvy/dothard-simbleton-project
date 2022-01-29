import { agents, getCompanies } from "./database.js";

const companies = getCompanies()
const agentList = agents()

const contentTarget = document.querySelector('#agents')

const purchasingHTML = ( agentObject ) => {
    return `
    <section class="agents-list">
        <h3>${agentObject.name} ${agentObject.lastName} </h3>
        <p><h4>${agentObject.company}</h4></p>
        <p><h5>${agentObject.number}</h5></p>
        <hr>
    </section>`
}

export const PurchaserList = () => {
    contentTarget.innerHTML = "<h2>Purchasing Agents</h2>"

    agentList.forEach(
        (agentObject) => {
                contentTarget.innerHTML += purchasingHTML(agentObject)
                
        }
    )
}

