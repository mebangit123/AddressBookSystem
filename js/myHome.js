let contactList;
window.addEventListener('DOMContentLoaded', (event) => {
    contactList = getDataFromLocalStorage();
    createInnerHtml();
    localStorage.removeItem("edit-contact");
})

const createInnerHtml = () => {
    const headerHtml = " <tr><th>FullName</th><th>Address</th><th>City</th><th>State</th><th>Zip Code</th><th>Phone Number</th></tr>"
    let innerHtml = `${headerHtml}`;
    if(contactList.length==0) return;
    for(const contactData of contactList) {
    innerHtml = `${innerHtml}
    <tr>
        <td>${contactData._fullName}</td>
        <td>${contactData._address}</td>
        <td>${contactData._city}</td>
        <td>${contactData._state}</td>
        <td>${contactData._zip}</td>
        <td>${contactData._phoneNo}</td>
        <td>
            <img id ="${contactData._id}" src="../assets/icons/delete-black-18dp.svg" alt="Delete" onclick="remove(this)">
            <img id ="${contactData._id}" src="../assets/icons/create-black-18dp.svg" alt="Edit" onclick="update(this)">
        </td>
    </tr>`;
    }
    document.querySelector('#display', ).innerHTML = innerHtml;
}

const getDataFromLocalStorage = () => {
    return localStorage.getItem('ContactList') ? JSON.parse(localStorage.getItem('ContactList')) : [];
}
const remove = (data) => {
    let contactDetails = contactList.find(contact => contact._id == data.id);
    if(!contactDetails) {
        return;
    }
    const index = contactList.map(contact => contact._id)
                                        .indexOf(contactDetails.id);
    contactList.splice(index, 1);
    localStorage.setItem("ContactList", JSON.stringify(contactList));
    createInnerHtml();
}
const update = (data) => {
    console.log(data.id)
    let contactDetails = contactList.find(contact => contact._id == data.id);
    if(!contactDetails)
    return;
    localStorage.setItem("edit-contact", JSON.stringify(contactDetails));
    window.location.replace(site_properties.add_contact_page);
}