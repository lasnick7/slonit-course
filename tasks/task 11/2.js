function cutString(string, maxLength) {
    if (string.length <= maxLength) {
        return string;
    }

    // если у нас влезает n символов, то нужно укоротить строку до (n - 3), 
    // так как необходимо еще добавить троеточие
    const substrLength = maxLength - 3;

    let slicedSubstr = string.slice(0, substrLength);
    const cutSubstr = string.slice(substrLength);

    // проверка на знаки препинания
    const punctiationMarks = [".", ",", "!", ":", "?", ";"]
    const lastSymbol = slicedSubstr.slice(-1);
    if (punctiationMarks.includes(lastSymbol)) {
        slicedSubstr = slicedSubstr.slice(0, -1);
    }

    if (cutSubstr.startsWith(' ')) {
        return slicedSubstr + '...';
    }

    return slicedSubstr.split(' ').slice(0, -1).join(' ') + '...';
}

let str = 'Часто, в интерфейсах программ мы видим какую-то длинную строку, которая не помещается и обрезана через троеточие.'

console.log(cutString(str, 9)); // Часто...
console.log(cutString(str, 40)); // Часто в интерфейсах программ мы видим...


