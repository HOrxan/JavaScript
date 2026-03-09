const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

function solution(s) {
    // Write your code here
    let f = [];
    let k = s.codePointAt(3) - s.codePointAt(0)
    for (let j = 0; j < k + 1; j++) {
        let d = String.fromCharCode(s.codePointAt(0) + Number(j));
        for (let i = Number(s[1]); i < Number(s[4]) + 1; i++) {
            f.push(d + i);
        }
    }
    return f;
}

const s = lines[0].trim();
console.log(JSON.stringify(solution(s)));