function solution(inputString) {
    return inputString === inputString.split('').reverse().join('');
    

}
console.log(solution("aabaa"));
console.log(solution("abac"));
console.log(solution("a"));

