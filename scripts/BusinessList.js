import { getCompanies } from "./database.js";
import { Company } from "./Business.js";


const companies = getCompanies()
const contentTarget = document.querySelector('#company-list')


export const companyList = () => {
    const companyArray = getCompanies()
    contentTarget.innerHTML = "<h2>Active Businesses</h2>"

    companyArray.forEach(
        (companyObject) => {
            contentTarget.innerHTML += Company(companyObject)
        }
    )
}

const companySearchResultArticle = document.querySelector(".foundCompanies")

const Business = (companyObj) => {
    return `
    <h2>${companyObj.companyName}</h2>
    `
}

document
    .querySelector("#companySearch")
        .addEventListener(
            "keypress",
            keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    /*
                        When the user presses 'Enter', find the matching business.
                    
                        You can use the `.includes()` string method to
                        see if a smaller string is part of a larger string.

                        Example: business.companyName.includes(keyPressEvent.target.value)
                    */
                    const inputValue = keyPressEvent.target.value.toLowerCase()
                    const foundBusiness = companies.find((business) => business.companyName.toLowerCase().includes(inputValue))/** implement .find() method here */

                    companySearchResultArticle.innerHTML = Business(foundBusiness);
                }
        });

