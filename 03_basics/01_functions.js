// Function of adding two numbers

    // function addingTwoNumbers(num1,num2){
    //     console.log(num1+num2);
    // }
    // addingTwoNumbers(3,5);

function addingTwoNumbers(num1,num2){
    console.log(num1+num2);
}
// addingTwoNumbers(4,6);
// const result = addingTwoNumbers(4,6);
// console.log("Result:",result);  //Return type function is not same as console.

function addingTwoNumbers(num1,num2){
    const result = num1+num2;
    // return result;
}
function addingTwoNumbers(num1,num2){
    return num1+num2;
}
const result = addingTwoNumbers(12,8);
// console.log("Result:",result);



function sendingLoggingMessage(username){
    return `${username} just logged in`;
}
// console.log(sendingLoggingMessage("Aditya"));

function sendingLoggingMessage(username= "user"){
    if(username === undefined){
        return `Please enter username`
    }
    return `${username} just logged in`;
}
// console.log(sendingLoggingMessage());

function sendingLoggingMessage(username){
    if(!username){
        return `Please enter username`
    }
    return `${username} just logged in`
}
// console.log(sendingLoggingMessage());

//Important
function cartPriceCalculating(...val1){
    return val1
}
console.log(cartPriceCalculating(200,300));

/* Object in function */

const user = {
    username:"aditya",
    price : 299
}
function getUserDetails(anyObject){
    return `Username is ${anyObject.username} and price is ${anyObject.price}`;
}
// console.log(getUserDetails(user));

//Another method
function getUserDetails(anyObject){
    return `Username is ${anyObject.username} and price is ${anyObject.price}`;
}
console.log(getUserDetails({
    username : "sam",
    price : 399
}));
const arr1 = [200,300];
function handleUser(anyArray){
    return anyArray[1];
}
console.log(handleUser(arr1));
console.log(handleUser([200,500]));