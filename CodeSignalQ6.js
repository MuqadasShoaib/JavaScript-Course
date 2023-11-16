
function solution(statues) {
   
    statues.sort((a, b) => a - b);

    let additionalStatues = 0;

    for (let i = 1; i < statues.length; i++) {
        const gap = statues[i] - statues[i - 1] - 1;
        additionalStatues += Math.max(gap, 0);
    }

    return additionalStatues;
}
const statuesArray = [6, 2, 3, 8];
console.log(solution(statuesArray));




