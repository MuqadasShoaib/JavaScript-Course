
function solution(n) {
    const ticket = n.toString();

    if (ticket.length % 2 !== 0) {
        return false;
    }
    else{
    const firstHalf = ticket.slice(0, ticket.length / 2).split('').reduce((sum, digit) => sum + parseInt(digit), 0);

    const secondHalf = ticket.slice(ticket.length / 2).split('').reduce((sum, digit) => sum + parseInt(digit), 0);

    return firstHalf === secondHalf;
    }}

console.log(solution(1230));
console.log(solution(239017,)); 










