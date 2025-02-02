function getSumOfValues(object) {
    let sum = 0;
    for (let key in object) {
        if (typeof object[key] === 'number') {
            sum += object[key];
        }
    }
    return sum;
}

let obj = {
    name: 'Vasya', 
    friends: 5, 
    likes: 19, 
    projects: 7
};

console.log(sumOfValues(obj)) // 31