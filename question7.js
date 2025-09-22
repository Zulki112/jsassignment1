function applyOperation(arr, operation)
{
    const operations = {
        square: num => num * num,
        double: num => num+num,
        negate: num=> -num,

    }
    const newArr = operations[operation];
    return arr.map(newArr);
}
    let arr = [2,3,4,5];
console.log(applyOperation(arr, "square"));
console.log(applyOperation(arr, "double"));
console.log(applyOperation(arr, "negate"));
