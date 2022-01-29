

export const Company = ( companyObject ) => {
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



