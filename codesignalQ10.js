
function solution(s1, s2) {
    var count = 0;
    for (let i in s1) {
        const index = s2.indexOf(s1[i]);
        if (index !== -1) {
            count++;
            s2 = s2.slice(0, index) + s2.slice(index + 1);
        }
    }
    return count;
}


const s1 = "aabcc";
const s2 = "adcaa";
const result = solution(s1, s2);
console.log(result);  



