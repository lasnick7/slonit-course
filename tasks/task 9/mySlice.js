function mySlice(array, start = 0, end) {
    let newArray = [];
    let lastIndex = end || array.length;
    let firstIndex = start;

    if (start < 0) {
        firstIndex = array.length + start;
    }
    if (end < 0) {
        lastIndex = array.length + end;
    }
    
    for (let index = firstIndex; index < lastIndex; index += 1) {
        newArray.push(array[index]);
    }

    return newArray;
}

let arr = ["t", "e", "s", "t", "u"];

console.log(arr.slice(1, 3)); // e, s (копирует с 1 до 3)
console.log(mySlice(arr, 1, 3)); // e, s (копирует с 1 до 3)

console.log(arr.slice(-2)) // t, u (копирует с -2 до конца)
console.log(mySlice(arr, -2)); // t, u (копирует с -2 до конца)

console.log(arr.slice(-4, -1)); // e, s, t (копирует с -4 до -1)
console.log(mySlice(arr, -4, -1)); // e, s, t (копирует с -4 до -1)



