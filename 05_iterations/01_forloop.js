/* -------------- FOR LOOP ------------------- */

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

const arr1 = ["shaktiman","naagraj","khatochkach"]
for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    console.log(element);
}

for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element)
}


for (let i = 1; i < 10; i++) {
    // console.log(`Outer loop : ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);
    }
    
}

///Break statement

for (let i = 0; i < 10; i++) {
    if(i==5){
        // console.log(`Detected 5`);
    }
    // console.log(`Value are : ${i}`);
}

for (let i = 0; i < 10; i++) {
    if(i==5){
        // console.log(`Detected 5`);
        break;
    }
    // console.log(`Value are : ${i}`);
}

///Continue statement

for (let i = 0; i < 20; i=i+2) {
    if(i==10){
        console.log(`${i} founded`);
        continue;
    }
    console.log(`Value are:${i}`);
    
}