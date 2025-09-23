

let numsArr =  ([1,2,3,4,5,6,7,8,9,10]);

function processArray(arr)
{
    return arr.map(n =>n*2)
    .filter (n => n %2===0)
    .reduce((sum,n)=> sum + n,0);
}

console.log(processArray(numsArr));
