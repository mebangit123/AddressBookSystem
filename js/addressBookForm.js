console.log("Loaded");
const save = () => {
    console.log("inside Save")
        let contactDetails = createContact();
        alert(contactDetails.toString());   
}
function createContact() {
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
const getInputValueByID = (id) => {
    let value = document.querySelector(id).value
    return value
}