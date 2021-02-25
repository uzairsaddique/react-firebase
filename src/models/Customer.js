class Customer {
    constructor(id, firstname, lastname, phonenumber, maritalstatus, gender, postcode, city, email){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email= email;
        this.phonenumber = phonenumber;
        this.maritalstatus = maritalstatus;
        this.gender = gender;
        this.postcode = postcode;
        this.city = city;
       
    }
}

export default Customer;