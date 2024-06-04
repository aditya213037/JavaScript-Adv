/* ------ Method-1 ------------*/

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task completed");
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Async resolved");
})

/* ------ Method-2 ------------*/

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve();
    },1000)
}).then(function(user){
    user = 'Async 2 completed';
    console.log(user);
})

/* ------ Method-3 ------------*/

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'aditya', email:'ag@gmail.com'});
    })
})

promiseThree.then(function(user){
    console.log(user);
    return user.username;
}).then(function(username){
    console.log(username);
})

/* ------ Method-4 ------------*/

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        const error = false;
        if(!error){
            resolve({username:'aditya',password:'123'});
        }else{
            reject("ERROR! Something went wrong.");
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.password;
}).then(function(pass){ 
    console.log(pass);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log('Finally promise is either resolve or rejected'));

/* ------ Method-5 ------------*/

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:'aditya',password:'123'});
        }else{
            reject("Error promise can't be resolved");
        }
    },1000)
});
//Async doesn't handle the error directly like '.then() & .catch() '.
async function consumePromisefive(){

    try {

        const response = await promiseFive;
        console.log(response);

    } catch (error) {

        console.log(error);
    }
}

consumePromisefive();

/*------ Using fetch() with async ---------*/

// async function getAllusers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         // console.log(response);
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllusers();

/*-------Using fetch() method with .then() & .catch() ------------*/

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})