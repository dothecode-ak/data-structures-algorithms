var arrayData=[];
for(let n=0;n<100;n++)
{
arrayData[n]=n+1;
}
console.log(arrayData);
console.log(`Length- ${arrayData.length}`);

//2 nd

var sentance="I am Anil Yadav",
word=sentance.split(" ");
console.log(word);
const obj=Object.assign({},word)
console.log(obj);
const newArray=Object.values(obj)
console.log(newArray);
// concat
const zero=0;
var arr1=[1,2,3],
arr2=[-3,-2,-1];
// console.log(arr2.concat(zero,arr1));

//even
var even=[12,6];
var isEven=function(num)
{
    // console.log(num);
return (num%2 == 0) ? true : false;
}
console.log(even.every(isEven));

//sort the array
console.log(even.sort());