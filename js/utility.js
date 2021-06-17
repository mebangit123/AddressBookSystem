const checkName = (name) => {
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(!nameRegex.test(name)) throw 'Name is Incorrect!';
}

const checkPhoneNo = (phoneNo) => {
    let phoneRegex = RegExp('^([0-9]{2}[\\s])?[1-9][0-9]{9}$');
    if(!phoneRegex.test(phoneNo)) throw 'Invalid Phone Number!';
}