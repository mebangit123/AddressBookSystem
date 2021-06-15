const checkName = (name) => {
    let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
    if(!nameRegex.test(name)) throw 'Name is Incorrect!';
}