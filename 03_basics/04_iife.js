///  Immediately Invoked Function Expressions
 
///  ** IIFE is used to remove globle scope/variable pollution to execute function immediately. **


// function chai(){
//     console.log(`DB COONECTED`);  ///Normal function
// }

(function chai(){
    //named iife
    console.log(`DB Connected`);
})();       // `;` is must to add if two iife are used in same file.

(() => {
    //unnamed iife
   console.log(`DB Connected TWO`);
})();

((name)=>{
    //iife with parameters
    console.log(`DB Connected, ${name}`);
})("Aditya");


