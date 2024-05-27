/*   PRIMITIVE DATATYPES
    7 types:
        ->String
        ->Number
        ->Boolean
        ->Null   {type of (null) = object}
        ->Undefined {type=undefined}
        ->BigINT
        ->Symbol                    */
    const score = 100;
    const score2 = 100.4;
    const numb = "aditya";
    const isLogged = true;
    const extrTemp = null;
    let emaild;
    const accountID = Symbol('123');
    const accountId1 = Symbol('123');
    // console.log( accountID === accountId1)

    /*  Non-Primitive(Reference) 
        
        ->Array
        ->Objects
        ->functions

    */
   const heroes = ["shaktiman", "naagraj", "doga"];


   let myObj = {
    name:"aditya",
    age:23,
    branch:"IT"
   }


   const myFunction = function(){
    console.log(myObj);
   }
   myFunction();  
   console.log(typeof myFunction);   //function
   console.log(typeof heroes);       //object
   console.log(typeof accountID)     //symbol

   /* ------------------------------------------------------------------------------- */

   /*
   
                                        MEMORY
                                     _____|______
                                    |            |
                                  STACK         HEAP
                              (Primitive)    (Non-Primitive)
                        -> Call by value      -> Call by Rference

                        -> changes occurs     -> Changes occur in 
                           in copy of var        original value of var


*/

let myProjectone = "Digital Marketing";
let myProjecttwo = myProjectone;
myProjecttwo = "Online cafe";   ///  Changes occurs only on created copy not on original value.

console.log(myProjectone);
console.log(myProjecttwo);

let objone = {
    email : "ag@gmail.com",
    upi : "adi@ybl"
}

let objtwo = objone;
 objtwo.email = "aditya1122@gmail.com";

console.log(objone);
console.log(objtwo);