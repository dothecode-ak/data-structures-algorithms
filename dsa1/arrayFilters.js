let a = [1, 2, 3, 5,7];
let b = [1, 2, 3,];
let ab = [];
for (let i = 0; i < a.length; i++)
{
    for (let j = 0; j < b.length; j++)
    {
        if (a[i] == b[j])
        {
            ab.push(a[i])
        }
        }
}
console.log(ab)

let c = a.filter((data) => {
    return b.indexOf(data) == -1
});
console.log(c)