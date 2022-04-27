//find the minvalue
let a = [1, 9, 67, 90];
let min = a[0];
for (let i = 1; i < a.length; i++) {
  if (a[i] < min) {
    min = a[i];
  }
}
console.log(min);
