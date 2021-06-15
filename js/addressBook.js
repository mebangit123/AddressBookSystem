class Contact {

    get id() { return this._id }
    set id(id) {
        this._id = id;
    }
    get fullName() { return this._fullName }
    set fullName(fullName) {
        this._fullName = fullName;
    }
    get phoneNo() { return this._phoneNo }
    set phoneNo(phoneNo) {
        this._phoneNo = phoneNo;
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