// let a=10; //Global scope
// const b=20; //Global
// var c=30;   //Always Global

if(true){
    let a=10; 
    const b =20; 
    var c=30;   
    
}

// console.log(a);
// console.log(b);
console.log(c);

/*------------- Scope Level & Mini Hosting ---------- */

function userDetails(){
    const username = "Aditya";
    function getUser(){
        const website = "portfolio"
        console.log(username);  //useername become global scope for inner function
    }
    // console.log(website); ///out of scope
    getUser();
}
// console.log(username); ///out of scope
userDetails();

if(true){
    const username = "aditya";
    if(username === "aditya"){
        const website = " youtube";
        console.log(username + website);
    }

}
/* ----------------------- Interesting Case ---------------------------- */

console.log(addingOne(5)); ///Doesn't give error
function addingOne(num){
    return num+1;
}
// console.log(addingOne(5));


console.log(addTwo(5)); ///Give error due to variable initialization 
const addTwo = function(num){
    return num+2;
}
// console.log(addTwo(5));