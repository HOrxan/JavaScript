const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

function solution(coordinate1, coordinate2) {
    // Write your code here

    if ((coordinate1[0].charCodeAt(0) - 96 + Number(coordinate1[1])) % 2 == (coordinate2[0].charCodeAt(0) - 96 + Number(coordinate2[1])) % 2) { return true }
    else { return false }
}
const coordinate1 = lines[0].trim();
const coordinate2 = lines[1].trim();
console.log(solution(coordinate1, coordinate2));