
function solution(inputString) {
    const stack = [];
    const result = inputString.split('');

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === '(') {
            stack.push(i);
        } else if (inputString[i] === ')') {
            const start = stack.pop();
            result.splice(start, i - start + 1, ...result.slice(start, i + 1).reverse());
        }
    }

    const outputString = result.filter(char => char !== '(' && char !== ')').join('');

    return outputString;
}
console.log(solution("(bar)")); 
console.log(solution("foo(bar)baz"));           
console.log(solution("foo(bar)baz(blim)"));      
console.log(solution("foo(bar(baz))blim"));   

