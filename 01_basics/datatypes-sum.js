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