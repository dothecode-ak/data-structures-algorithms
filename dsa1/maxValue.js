//find the minvalue
let a = [1, 9, 67, 90,900];
let max = a[0];
for (let i = 1; i < a.length; i++) {
  if (a[i] > max) {
    max = a[i];
  }
}
console.log(max);
