import { manufacturers } from "./database.js"
import { getCompanies } from "./database.js";

const companies = getCompanies()

const manufacturing = manufacturers()
const contentTarget = document.querySelector('.businessList--manufacturing')

const manufactorHTML = ( companyObject ) => {
    return `
    <section class="company">
        <h3>${companyObject.companyName}</h3>
        
        <p>
        ${companyObject.addressFullStreet}
        <br>
        ${companyObject.addressCity}, ${companyObject.addressStateCode} ${companyObject.addressZipCode}
        <hr>
        </p>
    </section>`
}

export const manufacturingList = () => {
    contentTarget.innerHTML = "<h2>Manufacturing Businesses</h2>"

    manufacturing.forEach(
        (companyObject) => {
                contentTarget.innerHTML += manufactorHTML(companyObject)
            
        }
    )
}