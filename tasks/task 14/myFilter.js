function myFilter(array, callback) {
    let result = [];
    for (let item of array) {
        if (callback(item)) {
            result.push(item);
        }
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.filter(number => number % 2 === 0)); // [ 2, 4 ]
console.log(myFilter(numbers, number => number % 2 === 0)); // [ 2, 4 ]

console.log(numbers.filter(number => number > 3)); // [ 4, 5 ]
console.log(myFilter(numbers, number => number > 3)); // [ 4, 5 ]



