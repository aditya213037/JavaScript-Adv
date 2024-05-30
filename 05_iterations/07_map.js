myNums = [1,2,3,4,5,6,7,8,9,10];
// const numb = myNums.map( (nums) => nums+10)


/* chaining mapping */
// const numb = myNums.map( (nums) => nums * 10).map( (nums) => nums + 1)

const numb = myNums.map( (nums) => nums * 10).map( (nums) => nums + 1).filter( (nums) => nums>=30)
console.log(numb);