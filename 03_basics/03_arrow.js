const user = {
    username:"aditya",
    fee : 999,
    welcomeMsg : function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}
// user.welcomeMsg();
// user.username = "sam bhadur";
// user.welcomeMsg();

// console.log(this);  ///Gives {} in node environment but in browser gives windows fun.

const one = function(){
    username = "Aditya"
    // console.log(this.username);  // `this` keyword does not work in function
}
// console.log(one());

const two = () => {
    username = "Aditya"
    console.log(this.username);  // `this` keyword does not work in function
}
two();



/* Method-1 : Arrow fun */

// const chai = (num1,num2) => {
//     return  num1 + num2;
// }
// console.log(chai(2,8));



/* Method-2 : Pure Arrow function */

const chai = (num1,num2) => (num1+num2)
console.log(chai(2,8));

const coffee = ()=>({username:"aditya"});
console.log(coffee());
