import { getCompanies } from "./database.js"
import { Company } from "./Business.js"
import { newYork } from "./database.js"

const companyArray = getCompanies()
const contentTarget = document.querySelector('.businessList--newYork')

const yorkies = ( companyObject ) => {
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

export const newYorkCompanyList = () => {
    const newYorkers = newYork()
    contentTarget.innerHTML = "<h2>New York Businesses</h2>"

    companyArray.forEach(
        (companyObject) => {
            if (companyObject.addressStateCode === "NY") {
                contentTarget.innerHTML += yorkies(companyObject)
            }
        }
    )
}