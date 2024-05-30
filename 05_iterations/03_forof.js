//Specially for array and array of objects.
//In this, doesn't required to intialization and increment.
const arr = [1,2,3,4,5];
for (const num of arr) {
    // console.log(`Items of array: ${num}`);
}

const greetings = "hello world";
for (const greet of greetings) {
    if(greet == " "){
        continue;
    }
    // console.log(`Char of Greetins: ${greet}`);
}

////MAP /* IMPORTANT for Projects building */


const myMap = new Map();
myMap.set( 'IN' , "India");
myMap.set( 'USA',"United States of America");
myMap.set( 'FR',"France");
myMap.set('IN',"India")
// console.log(myMap);

for (const key of myMap) { 
    ///Return whole map in array format
    // console.log(key)
}
for (const [key] of myMap) {
    //Return all key elements of map
    // console.log(key)
}
for (const [key,value] of myMap) {
    // console.log(`key elements : ${key}  &  Value of respective key : ${value}`);
}


//For objects : 'for in' is unable to iterate objects b'coz objects are not iterable.

const games = {
    'game1' : "BGMI",
    'game2' : "AmongUS",
    'game3' : "Smashkart"
}
// for (const [key,value] of games) {
//     // console.log(`${key} :- ${value}`);   /* NOT ITERABLE */
// }