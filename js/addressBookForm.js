let isUpdate = false;
let contactObj = {};

window.addEventListener("DOMContentLoaded", (event)=>{
    validatePhoneNo();
    validateName();
    checkForUpdate();
});

const validateName = () => {
    let textError = document.querySelector('.error-output');
    let name = document.querySelector('#fName');
    name.addEventListener('input', () => {
        if(name.value.length == 0){
            return textError.textContent ='';
        }
        try {
            checkName(name.value);
            textError.textContent = "";   
        } catch (error) {
            textError.textContent = error;
        }
    })
}

const validatePhoneNo = () => {
    let textError = document.querySelector('.phoneNo-error');
    let phoneNo = document.querySelector('#phone');
    phoneNo.addEventListener('input', () => {
        try {
            checkPhoneNo(phoneNo.value);
            textError.textContent = "";   
        } catch (error) {
            textError.textContent = error;
        }
    })
}
const save = (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
        setContactObj();
        createAndUpdateStorage();
        resetForm();
        window.location.replace(site_properties.home_page);   
    } catch (error) {
        alert("Error: Cannot Save Contact!")
        return;
    }
}
function setContactObj() {
    contactObj._fullName = getInputValueByID('#fName');   
    contactObj._phoneNo = getInputValueByID('#phone');
    contactObj._address = getInputValueByID('#address');
    contactObj._city = getInputValueByID('#city');
    contactObj._state = getInputValueByID('#state');
    contactObj._zip = getInputValueByID('#zip');
}
const createAndUpdateStorage= () => {
    let contactList = JSON.parse(localStorage.getItem("ContactList"));
    if(contactList) {
        let contactDetails = contactList.find(contact => contact._id == contactObj._id);
        if(!contactDetails) {
            contactList.push(createContactData())
        }else {
            const index = contactList.map(contact => contact.id)
                                             .indexOf(contactDetails._id);
            contactList.splice(index, 1, createContactData(contactDetails._id))
        }
    }else {
        contactList = [createContactData()];
    }
    localStorage.setItem("ContactList", JSON.stringify(contactList));
    alert("Data Stored");
}
const createContactData = (id) => {
    let contact = new Contact();
    if(!id) contact.id = createNewContactId();
    else contact.id = id;
    setContact(contact);
    return contact;
}
const setContact = (contact) => {
    try {
        contact.fullName = contactObj._fullName;   
        contact.phoneNo = contactObj._phoneNo;
    } catch (error) {
        alert(error);
        throw error;
    }
    contact.address = contactObj._address;
    contact.city = contactObj._city;
    contact.state = contactObj._state;
    contact.zip = contactObj._zip
}
const createNewContactId = () => {
    let cId = localStorage.getItem("ContactId");
    cId = !cId? 1:(parseInt(cId)+1).toString();
    localStorage.setItem('ContactId', cId);
    return cId;
}
const checkForUpdate = () => {
    const empJson = localStorage.getItem('edit-contact');
    isUpdate  = empJson? true:false;
    if(!isUpdate){
        return;
    }
    contactObj = JSON.parse(empJson);
    setForm();
}
const setForm = () => {
    setValue('#fName', contactObj._fullName);
    setValue('#address', contactObj._address);
    setValue('#city',contactObj._city);
    setValue('#state',contactObj._state);
    setValue('#zip', contactObj._zip);
    setValue('#phone', contactObj._phoneNo)
}
const resetForm = () => {
    setValue('#fName', '');
    setValue('#address', '');
    setValue('#city','');
    setValue('#state','');
    setValue('#zip', '');
    setValue('#phone', '')
}
const setTextValue = (id, message) => {
    let textError = document.querySelector(id);
    textError.textContent = message;
}
const setValue = (id, value) => {
    let element = document.querySelector(id);
    element.value = value;
}
const getInputValueByID = (id) => {
    let value = document.querySelector(id).value
    return value
}