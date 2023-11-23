
function solution(a) {
    let heights = a.filter((height) => height !== -1).sort((a, b) => a - b);
  
    let counter = 0;
  
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== -1) {
        a[i] = heights[counter];
        counter++;
      }
    }
  
    return a;
  }

const inputArray = [-1, 150, 190, 170, -1, -1, 160, 180];
const result = solution(inputArray);
console.log(result);


