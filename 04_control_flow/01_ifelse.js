/* ------------------- IF and Else statement ----------------------- */

//using comparison operators: <,>,<=,>=,==,!=,===


// const userLoggedIn = true;
// if(userLoggedIn){
//     console.log("User logged In");
// }

const temp = 41;
// if (temp<50) {
//     console.log("No heat waves");
// }

// if (temp === 41) {
//     console.log("temperature is 41 degree C")
// }


// if (temp > 50) {
//     console.log("heat waves")
// } else {
//     console.log(" no Heat waves");
// }

let score = 200;
if (score >= 200) {
    let power = "fly"
    console.log(`user get ${power} power`);
}
// console.log(`user get ${power} power`);         //out of scope. 

//Implicit control if/else.

const balance = 1000;
// if(balance>500) console.log("No chrges deducted");

if(balance<=500){
    console.log("Low Balance");
}
else if(balance<=750){
    console.log("Please maintain min balance");
}
else if(balance<=900){
    console.log("Charges may deducted");
}
else{
    console.log(`Your balance is ${balance}`);
}


/* Multiple conditions checked at same time */
const isLoggedIn = true;
const isCourseBuy= true;
const isLoggedFromGmail = true;
const isLoggedFromGoogle = false;

if(isLoggedIn && isCourseBuy){
    console.log("Welcome to course");
}else{
    console.log("Please buy the course");
}

if( isLoggedFromGmail || isLoggedFromGoogle){
    console.log("You can buy the course");
}else{
    console.log("Please login first");
}
