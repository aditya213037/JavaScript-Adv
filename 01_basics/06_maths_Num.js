const score = 400;
// console.log(score);

const numb = new Number(400);
// console.log(numb);

// console.log(numb.toString().length);
// console.log(numb.toFixed(2));

const numero = 123.9789;
// console.log(numero.toPrecision(4)); ///Give rounf-off number upto given limit

const hundreds = 10000000000;
// console.log(hundreds.toLocaleString('en-IN')); ///add commas in between digits to make readable


/* ----------------------Maths----------------------------------------- */

console.log(Math.random()); //Give random value in b/w 0 and 1.

console.log(Math.random() * 10); //Give random value in b/w 1 & 9 except for 0.0321...

console.log(Math.floor(Math.random() * 10) + 1); //Give random value >=1 

// Random value b/w two numbers.
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max-min + 1)) + min); // * (max-min+1)
