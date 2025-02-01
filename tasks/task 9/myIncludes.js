function myIncludes(array, item, from = 0) {
    let start = from;
    let result = false;

    if (start >= array.length) {
        return result;
    }

    if (-array.length <= from && from < 0) {
        start = array.length + from;
    }
    if (from < -array.length) {
        start = 0;
    }

    for (let index = start; index < array.length; index += 1) {
        if (array[index] === item) {
            result = true;
            break;
        }
        if (isNaN(array[index]) && isNaN(item)) {
            result = true;
            break;
        }
    }
    return result;
}

console.log([1, 2, 3].includes(2)); // true
console.log(myIncludes([1, 2, 3], 2)); // true

console.log([1, 2, 3].includes(4)); // false
console.log(myIncludes([1, 2, 3], 4)); // false

console.log([1, 2, 3].includes(3, 3)); // false
console.log(myIncludes([1, 2, 3], 3, 3)); // false

console.log([1, 2, 3].includes(3, -1)); // true
console.log(myIncludes([1, 2, 3], 3, -1)); // true

console.log([1, 2, NaN].includes(NaN)); // true
console.log(myIncludes([1, 2, NaN], NaN)); // true

console.log(["1", "2", "3"].includes(3)); // false
console.log(myIncludes(["1", "2", "3"], 3)); // false
