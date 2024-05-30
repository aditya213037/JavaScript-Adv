const lang = {
    js : "javascript",
    cpp : "C++",
    rb : "Ruby on rail",
    py : "python"
}

for (const key in lang) {
    // console.log(`${key} is shortform of ${lang[key]}`);
}

/* For In loop doesn't iterate Map */

const myMap = new Map();
myMap.set('IN' , "India");
myMap.set('USA' , "United States of America");
myMap.set('FR' , "France");
for (const key in myMap) {
    // console.log(key);
}

const arrLang = ["js" , "cpp" , "rb" , "py" , "swift"];
for (const key in arrLang) {
    console.log(`${key} : ${arrLang[key]}`);
}