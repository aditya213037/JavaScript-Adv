const accountId=44343
let accountEmail="alfa@gmail.com"
var accountPass="12345"
accountCity="LKO"  /*  Bad Practice  */ 
let accounState;

/*  Always prefer to use 'let' instead of 'var' 
    because of issue in block scope and functional scope.
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPass,accountCity,accounState])
