// console.log(null > 0);  //FALSE
// console.log(null == 0); //FALSE
// console.log(null >= 0); //TRUE


 /*  equality check '==' and comparisons operators treat differently
    on using comparison operators the 'null' will be converted into '0'
    that's why 'null >= 0' is true=0 and rest all are zero .   */ 

// console.log("2" == 2)
// console.log("2" == "2")
// console.log("2" > 1)
// console.log("2" < 1)
// console.log(2 > "1")
// console.log("2" > "1")

/**  '===' Strictly equal to : checks value as well as datatype */

console.log("2" === 2)
console.log("2" === "2")
console.log("2" === "1")