const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

function solution(date) {
    // Write your code here
        return Number(date.slice(0, 4)).toString(2) + "-" + Number(date.slice(5, 7)).toString(2) + "-" + Number(date.slice(8, 10)).toString(2);
}

const date = lines[0].trim();
console.log(solution(date));
