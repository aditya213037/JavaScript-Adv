class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Logged by ${this.username}`);

    }

    static createId(){    //can't be accessed by object
        return '123';
    }
}
const chai = new User("chai");
// chai.logMe();
// console.log(chai.createId());  //gives error b'coz the accesed method is staticly defined that doesn't allow to call the function.

class Teacher extends User {
    constructor(username,email){
        super(username);
        this.email = email;
    }

}

const tea = new Teacher("Tea","tea@gmail.com");
tea.logMe();
console.log(tea.createId()); //can't be accessed