let isUpdate = false;
let contactObj = {};

const save = () => {
        console.log("inside Save")
        let contactDetails = createContact();
        alert(contactDetails.toString());   
        createAndUpdateStorage(contactDetails);
        window.location.replace(site_properties.home_page);
}
function createContact(contactDetails) {
    let contact = new Contact();
    try {
        contact._fullName = getInputValueByID('#fName');   
        contact._phoneNo = getInputValueByID('#phone');
    } catch (error) {
        alert(error);
    }
    contact._address = getInputValueByID('#address');
    contact._city = getInputValueByID('#city');
    contact._state = getInputValueByID('#state');
    contact._zip = getInputValueByID('#zip');
    return contact;
}
const createAndUpdateStorage = (data) => {
    let dataList = JSON.parse(localStorage.getItem('ContactList'))
    if(dataList != undefined){
        dataList.push(data)
    }
    else
    {
        dataList = [data]
    }
    localStorage.setItem("ContactList", JSON.stringify(dataList));
    alert("Data stored with name: "+data.fullName)
}
const checkForUpdate = () => {
    const empJson = localStorage.getItem('edit-contact');
    isUpdate  = empJson? true:false;
    if(!isUpdate){
        return;
    }
    contactObj = JSON.parse(empJson);
    setForm();
    console.log(contactObj);
}
const setForm = () => {
    setValue('#name', contactObj._fullName);
    setValue('#address', contactObj._address);
    setValue('#city',contactObj._city);
    setValue('#state',contactObj._state);
    setValue('#zip', contactObj._zip);
    setValue('#phone', contactObj._phoneNo)
}
const setValue = (id, value) => {
    let element = document.querySelector(id);
    element.value = value;
}
const getInputValueByID = (id) => {
    let value = document.querySelector(id).value
    return value
}