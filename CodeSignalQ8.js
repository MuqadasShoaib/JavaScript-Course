function solution(matrix) {
    let totalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            
            if (matrix[i][j] !== 0) {

                let isSuitable = true;
                for (let k = i - 1; k >= 0; k--) {
                    if (matrix[k][j] === 0) {
                        isSuitable = false;
                        break;
                    }
                }

            
                if (isSuitable) {
                    totalSum += matrix[i][j];
                }
            }
        }
    }

    return totalSum;
}

const matrix1 = [
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]
];
console.log(solution(matrix1)); 

const matrix2 = [
    [1, 1, 1, 0],
    [0, 5, 0, 1],
    [2, 1, 3, 10]
];
console.log(solution(matrix2)); 
