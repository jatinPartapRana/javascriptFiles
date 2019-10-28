class User{
    constructor(){

    }
    constructor(firstName, lastName, credits){
        this.firstName = firstName;
        this.lastName = lastName;
        this.credits = credits;
    }

    getFullName(){
        let fullName = `${this.firstName} ${this.lastName} is my fullname`;
    }
    editName(newName){
        const myName = newName.split(' ');
        this.firstName = myName[0];
        this.lastName = myName[1];
    }
}



class Teacher extends User{
    constructor(firstName, lastName, credits,subject){
        super(firstName, lastName, credits);
        this.subject = subject; 
    }
}

const john = new User('john', 'anderson', 34);// creating the object
console.log(john.firstName);
console.log(john.getFullName);