function calculate(a, b, operation) {
    return operation(a, b);
}

const makeMultiplication = function(a, b) {
    return a * b;
};

const makeDivision = function(a, b) {
    return a / b;
};

const makeAddition = function(a, b) {
    return a + b;
};

const makeSubtraction = function(a, b) {
    return a - b;
};

const operations = {
    multiply: makeMultiplication,
    divide: makeDivision,
    add: makeAddition,
    substract: makeSubtraction,
}

let selectedOperation = "multiply";
console.log(calculate(6, 3, operations[selectedOperation])); // 18

selectedOperation = "divide";
console.log(calculate(6, 3, operations[selectedOperation])); // 2

selectedOperation = "add";
console.log(calculate(6, 3, operations[selectedOperation])); // 9

selectedOperation = "substract";
console.log(calculate(6, 3, operations[selectedOperation])); // 3