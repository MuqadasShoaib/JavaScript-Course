
function solution(sequence) {
    let removalCount = 0;

    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            removalCount++;

            if (i >= 2 && sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
                return false;
            }
        }
    }

    return removalCount <= 1;
}

// Test cases
console.log(solution([1, 3, 2, 1]));
console.log(solution([1, 3, 2])); 



