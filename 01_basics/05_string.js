const name = "Aditya";
const repoCount = 12;
console.log(`My name is ${name} and my repo count is ${repoCount} `);

const firstName = new String('Aditya');
console.log(firstName[0]);
console.log(firstName.__proto__);   ///Gives type i.e. datatype.
console.log(firstName.length);      ///Count no. of characters.
console.log(firstName.toUpperCase());   ///Convert into Upper case.
console.log(firstName.charAt(3));       ///Give character of particular index
console.log(firstName.indexOf('t'));    ///Give index of particular character

const newString = firstName.substring(1,5); //create substring from given string but it doesn't take -ve parameters
console.log(newString);
const anotherString = firstName.slice(-1,3); //slice the part of string it takes -ve parameters
console.log(anotherString);

const auth = "  aditya   ";
console.log(auth);
console.log(auth.trim());  ///Remove white spaces


const beta = "https//:aditya%20web.com";
console.log(beta.replace('https//:aditya%20web.com','pro.in')); ///Replace the character with other character

console.log(beta.includes('alpha'));  //Checks given characters are present in string or not
 
