let arr = [1, 2, 3, 33];
let obj1={name:'anil',age:28}
for (const [index ,value]  of arr.entries()) {
    console.log(index,value);
}
for (const key in obj1) {
     console.log(`${key}:${obj1[key]}`);
}