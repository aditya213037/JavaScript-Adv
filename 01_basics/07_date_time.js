const myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());  //give   day  month dd yyyy   hh:mm:ss
// console.log(myDate.toDateString()); //give day month dd yyyy
// console.log(myDate.toISOString()); //Same as Date() fun
// console.log(myDate.toJSON()); //same as Date() fun
// console.log(myDate.toLocaleDateString()); //Give only date in format mm/dd/yyyy
// console.log(myDate.toLocaleString());     //Give date with time format mm/dd/yyyy, hh:mm:ss am-pm
// console.log(myDate.toLocaleTimeString()); //Give only time hh:mm:ss am-pm

// let myCreatedDate1 = new Date(2024, 0, 1);
let myCreatedDate = new Date(2024, 0, 1, 5, 3);
// let myCreatedDate3 = new Date("2024-01-12");
let myCreatedDate3 = new Date("05-28-2024");
// console.log(myCreatedDate3.toLocaleString());
 
//TIME

let timeStamp = Date.now();
console.log(timeStamp);  //Give time in millsecond from  21 DEC 1970 to till now
console.log(myCreatedDate3.getTime()); //Give time from given date to till now
console.log(Math.floor(myCreatedDate.getTime()/1000)); //Give time in seconds.

/* IMPORTANT FOR PROJECT BUILDING */
const newDate = new Date();
newDate.toLocaleString('defult',{
    weekday : "long",
    timeZone : ""
})
