function SetUserName(username){
    this.username = username;
    console.log("called")
}

function createUser(username,email,pass){
    SetUserName.call(this,username);  //used the call fun to to call the function explicitly
    this.email = email;
    this.pass = pass;
}

const user = new createUser("aditya","ag@gmail.com","123");
console.log(user);