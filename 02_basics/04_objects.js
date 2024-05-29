/* usinng Constructor (SINGLETON) */


 const tinderUser = new Object();
 console.log(tinderUser);
 tinderUser.id = "123abc";
 tinderUser.eamil = "a@b.com"
 tinderUser.isLoggedIn = true
//  console.log(tinderUser);

const fullUserName = {
    email : "a@b.com",
    fullname : {
        username : {
            firsrName :"Aditya",
            lastName : "Gupta"
        }
    }
}
// console.log(fullUserName.fullname.username);

const obj1 = {1:'a', 2:'b'};
const obj2 = {3:'a', 4:'b'};
const obj4 = {5:'a',6:'b'};
// const obj3= {obj1,obj2};
const obj3 = Object.assign({},obj1,obj2); //1 method of adding two objects , ` {} === obj3 `
// console.log(obj3);

const obj5 = {...obj1,...obj2};
// console.log(obj5);

const userDetails = [
    {id:'123abd',email:"abc@gamil.com"},
    {id: '123xyz',email : "xyz@gmail.com" },
    {id:'123pqr',email:"pqr@gmail.com"}
]
// console.log(userDetails[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //return all keys with array datatype
console.log(Object.values(tinderUser)); //return all values with array datatype
console.log(Object.entries(tinderUser)); //return key value pairs in array datatype.
console.log(tinderUser.hasOwnProperty("isLoggedIn")); //check that element in objects or not.

/*-------------------------- Object Destructuring -------------------------- */

const JsUser = {
    id:"123abc",
    name : "aditya",
    email : "ag@gmail.com",
    mentor : "Hitesh Choudhary"
}
JsUser.email;
const {mentor} = JsUser;   //Using in large projects
console.log(mentor);

const navbar = (section) => {            //Used in React js framework.

}
navbar(section = "IT-1")

/* JSON Intro : API */
 //Format
//  {
//     "name":"Aditya",
//     "id": "123abc",
//     "course":"js in hindi"
//  }
[
    {},

    {},

    {}
]
