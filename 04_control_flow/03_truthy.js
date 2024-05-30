const userEmail = "ag@gmail.com"; //true
const userId= ""                   //false
const userPass = []                 //true
if (userPass) {
    console.log("Executed");
}

///FALSSY
// "", 0, -0, false, null, undefined, BigInt 0n, NaN

///TRUTHY
// " ",' ', true, 1, "0", [], {}, function(){}, "false"

if(userPass.length === 0){
    console.log("executing")
}
const emtyObj = {}
if((Object.keys(emtyObj)).length === 0){
    console.log("Object is Empty");
}

/* -------------- NULLING COALESCING METHOD : NULL ,UNDEFINED--------------- */

let val1;
val1 = 5 ?? 10;
val1 = null ?? 14;
val1 = undefined ?? 13;
val1 = undefined ?? null ?? 12 ?? 10;
console.log(val1);

//TERNARY OPERATOR 
const isLogged = true;
isLogged ? console.log("logged in") : console.log("Please log in first");