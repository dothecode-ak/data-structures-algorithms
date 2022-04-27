var target = { name: "xyz", age: 20 };
var source1 = { name: "abc", grade: 12 };
var source2 = { gender: "female" };
//ES5
let op = Object.assign(target, source1, source2);
console.log(op);
// In ES6
updatedTarget = { ...target, ...source1, ...source2 };
console.log(updatedTarget);
