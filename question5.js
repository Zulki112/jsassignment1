function mergeArrays(...arrays)
{
    return [new Set(arrays.flat())]
}

console.log(mergeArrays([10,20],[20,30,40], [10,60]));
