function isSubstring(str1, str2) {
    let minStr = str1;
    let maxStr = str2;
    if (str1.length > str2.length) {
        minStr = str2;
        maxStr = str1;
    }
    return maxStr.includes(minStr);
}

console.log(isSubstring('hi', 'say hi')); // true
console.log(isSubstring('isopropyl myristate', 'state')); // true
console.log(isSubstring('arya stark', 'harry potter')); // false


