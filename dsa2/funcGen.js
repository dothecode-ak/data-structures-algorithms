function* genNum()
{
    yield 1;
    yield 2;
    yield 1;
    yield 2;
}
let result = genNum();
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);