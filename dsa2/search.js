var data = ["A", 1, 'B', 'C'];
function Search(x) {
    console.log(x);
    if (typeof (x) === "number") {
        return true;
    }
}
let op=Search.apply([...data]);
console.log(op);