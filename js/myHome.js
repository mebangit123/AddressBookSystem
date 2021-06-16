window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
})

const createInnerHtml = () => {
    const headerHtml = " <tr><th>FullName</th><th>Address</th><th>City</th><th>State</th><th>Zip Code</th><th>Phone Number</th></tr>"
    const contactList= createcontactJSON();              
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
            <img id="${contactData._id}" src="../assets/icons/delete-black-18dp.svg" alt="Delete" onclick="remove(this)">
            <img id="${contactData._id}" src="../assets/icons/create-black-18dp.svg" alt="Edit" onclick="update(this)">
        </td>
    </tr>`;
    }
    document.querySelector('#display', ).innerHTML = innerHtml;
}

const createcontactJSON  = () => {
        const contactistLocal =[
            {
                _id: 1,
                _fullName: "Meban Nongrum",
                _address: "Amjajer",
                _city: "Shillong",
                _state: "Meghalaya",
                _zip: 703150,
                _phoneNo: 9865797545,
            },
            {
                _id: 2,
                _fullName: "Jaspar Dhar",
                _address: "Nartiang",
                _city: "Shillong",
                _state: "Meghalaya",
                _zip: 703150,
                _phoneNo: 9863497545,
            }
        ]
        return contactistLocal;
    }