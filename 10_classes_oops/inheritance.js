class User{
    constructor(username){
        this.username = username;

    }

    logMe(){
        console.log(`USERNAME is:${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addingNewCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}
const chai = new Teacher("chai","chai@gmail.com","12345");
chai.addingNewCourse();
chai.logMe();

console.log(chai instanceof User); //gives true b'coz chai is an instance of User and teacher class.