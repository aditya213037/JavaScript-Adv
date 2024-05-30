/*-------------------- For Each Loop -------------------- */

const lang = ["js","rb", "py", "cpp", "swift"];

lang.forEach(function (val){
    // console.log(val);
});

lang.forEach((item) =>{
    // console.log(item);
});

function printMe(item){
    // console.log(item);
};
lang.forEach(printMe);  //using function in loop

lang.forEach( (item,index,array) => {           ////parameters of loop.
    // console.log(item,index,array);
})

/* -------------------IMPORTANT---------------------------------- */

/* 
        array = [
                    { 
                        obj 1
                    },

                    {
                        obj 2
                    },

                    {
                        obj 3
                    }

                ]
*/

const Chai = [
    {
        langName : "JavaScript",
        langFile : ".js"
    },

    {
        langName : "Python",
        langFile : ".py"
    },

    {
        langName : "C++",
        langFile : ".cpp"
    }
]

Chai.forEach( (item) => {
    // console.log(item);
})

Chai.forEach( (item) => {
    console.log(item.langFile);  //Return key element of each object of array.
    
})