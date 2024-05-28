const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];

// arr1.push(arr2);
// console.log(arr1);

// const arr3 = arr1.concat(arr2);
// console.log(arr3);

const arr4 = [...arr1,...arr2];
// console.log(arr4);

const arr5 = [1,2,3,[4,5],4,[5,6,[7,8],9]]
const arr6 = arr5.flat(Infinity);   //concatenate array inside array.
console.log(arr6);

console.log(Array.isArray("Aditya")); //Check that the element is array.
console.log(Array.from("Aditya"));    //Convert non-array into array.
console.log(Array.from({name:"aditya"})); //gives [] as output #INTERESTING case

const score1=100;
const score2=200;
const score3=300;
console.log(Array.of(score1,score2,score3)); //convert into array.


