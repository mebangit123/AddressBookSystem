class Contact {

    get id() { return this._id }
    set id(id) {
        this._id = id;
    }
    get fullName() { return this._fullName }
    set fullName(fullName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
        if(nameRegex.test(fullName)) {
            this._fullName = fullName;
        }
        else throw 'Name is Incorrect!';
    }
    get phoneNo() { return this._phoneNo }
    set phoneNo(phoneNo) {
        let phoneRegex = RegExp('^([0-9]{2}[\\s])?[1-9][0-9]{9}$');
        if(phoneRegex.test(phoneNo))
            this._phoneNo = phoneNo;
        else throw 'Invalid Phone Number!'
    }
    get address() { return this._address }
    set address(address) {
        this._address = address;
    }
    get city() { return this._city }
    set city(city) {
        this._city = city;
    }
    get state() { return this._state }
    set state(state) {
        this._state = state;
    }
    get zip() { return this._zip }
    set zip(zip) {
        this._zip = zip;
    }
    toString() {
        return "FullName: "+this._fullName+", PhoneNo: "+this._phoneNo+", Address: "+this._address+", City: "+this._city+", State: "+this._state+
                ", Zip: "+this._zip;
    }
}