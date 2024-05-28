//Singleton: created by Literals

/* Literals */

const mySym = Symbol("key1");  //how to create symbol. #IMP for interview purpose

const JsUser = {
    name:"aditya",
    age: 23,
    [mySym] : "mykey",   //using created symbol in object
    email : "ag@gmail.com",
    Location:"Noida",
    isLoggedIn:false,
    lastLoggedInDays : ["Monday", "Friday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "ag@akgec.ac.in";
// console.log(JsUser);

// Object.freeze(JsUser);   //freeze the complete object
// JsUser.email = "ag@google.com";  //doesn't change any key: value pair afer freezing.
// console.log(JsUser);

JsUser.greetings = function(){   //Important fot interview purpose
    console.log("Hello World"); 
}
console.log(JsUser.greetings());

JsUser.greetingTwo = function(){
    console.log(`Hello JS user , ${this.name}`); //Importnat
}
console.log(JsUser.greetingTwo());