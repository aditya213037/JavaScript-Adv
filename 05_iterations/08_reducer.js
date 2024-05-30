/* --------------------- REDUCER ------------------------- */

myNums = [1,2,3,4,5,6,7,8,9,10];
// const numb = myNums.reduce( function(acc,currval) {
//     console.log(`Accumulator value: ${acc} and Current value: ${currval}`);
//     return acc+currval;
// },0)

//Using ARROW fun
const numb = myNums.reduce( (acc,curr) => acc+curr,0);
// console.log(numb);

/* ---------------- EXAMPLE OF calculating total price of shopping cart -------------- */

const sellingCourse = [
    {
        courseName : "js",
        price : 2999
    },
    {
        courseName : "py",
        price : 5999
    },
    {
        courseName : "Web dev",
        price : 7999
    },
    {
        courseName : "Data Scientist",
        price : 12999
    }
]

const totalPrice = sellingCourse.reduce( (acc,item) => acc+item.price,0);
console.log(totalPrice);

