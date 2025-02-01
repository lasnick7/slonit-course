function myIndexOf(array, item, from = 0) {
    let start = from;
    let result = -1;

    if (start >= array.length) {
        return result;
    }

    if (from < 0) {
        start = array.length + from;
    }

    for (let index = start; index < array.length; index += 1) {
        if (array[index] === item) {
            result = index;
            break;
        }
    }
    return result;
}

let array = [4, 2, 2, 5, 9];

console.log(array.indexOf(2)); // 1
console.log(myIndexOf(array, 2)); // 1

console.log(array.indexOf(7)); // -1
console.log(myIndexOf(array, 7)); // -1

console.log(array.indexOf(9, 2)); // 4
console.log(myIndexOf(array, 9, 2)); // 4

console.log(array.indexOf(2, -1)); // -1
console.log(myIndexOf(array, 2, -1)); // -1

console.log(array.indexOf(2, -3)); // 2
console.log(myIndexOf(array, 2, -3)); // 2