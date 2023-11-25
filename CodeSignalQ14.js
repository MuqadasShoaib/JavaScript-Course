function solution(weights) {
    let team1Total = weights.filter((_, index) => index % 2 === 0).reduce((sum, weight) => sum + weight, 0);
    let team2Total = weights.filter((_, index) => index % 2 !== 0).reduce((sum, weight) => sum + weight, 0);
    return [team1Total, team2Total];
}
const a = [50, 60, 60, 45, 70];
const result = solution(a);
console.log(result); 