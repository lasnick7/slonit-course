function sortKeys(object) {
    return Object.keys(object)
        .map(key => [key, object[key]])
        .filter(item => typeof item[1] === 'number')
        .sort((a, b) => b[1] - a[1])
        .map(item => item[0]);
}

let obj = {
    name: 'Vasya', 
    friends: 5, 
    likes: 19, 
    projects: 7
};

console.log(sortKeys(obj)); // [ 'likes', 'projects', 'friends' ]
