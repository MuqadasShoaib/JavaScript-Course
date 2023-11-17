function solution(inputArray) {
    let maxLength = 0;
    const longestStrings = [];


    for (const str of inputArray) {
        if (str.length > maxLength) {
            maxLength = str.length;
        }
    }

    for (const str of inputArray) {
        if (str.length === maxLength) {
            longestStrings.push(str);
        }
    }

    return longestStrings;
}

const inputArray = ["aba", "aa", "ad", "vcd", "aba"];
console.log(solution(inputArray)); 
