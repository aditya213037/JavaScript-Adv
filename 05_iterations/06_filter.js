const lang = ["js", "py", "rb","cpp", "swift" ]

// lang.forEach( (item) => {
//     console.log(item);
// })

let myLang = lang.forEach( (item) => {  //for each loop doesn't return output
    // console.log(item);                  
    return item;
})
// console.log(myLang);



const myNums = [1,2,3,4,5,6,7,8,9,10];
//if curly braces is not used then there is no requirement of using return.
let newNums = myNums.filter( (nums) => (nums>6) )       
// console.log(newNums);


///here 'return' is used b'coz of curly braces '{}'.
let numb = myNums.filter( (nums) => { return nums>3})
// console.log(numb);



/* Using 'for each' loop method , it requires some logic to implement this loop.  */
const champ = [];
myNums.forEach( (nums) => {
    if(nums>5){
        champ.push(nums);
    }
})
// console.log(champ);

/* ------------------ EXAMPLE -------------------- */

//IMPORTANT.

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let user = books.filter( (buk) => buk.genre === 'History');
user = books.filter( (buk) => {return buk.publish >= 2000})
user = books.filter( (buk) => {
    return buk.edition >=2000 && buk.genre === "Non-Fiction" ;
})

console.log(user);