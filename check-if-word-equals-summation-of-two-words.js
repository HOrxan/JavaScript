const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

function solution(firstWord, secondWord, targetWord) {
    // Write your code here
    let f = "", s = "", t = "";
    for (let i = 0; i < firstWord.length; i++) {
        f += firstWord.codePointAt(i) - 97;
    }
    for (let i = 0; i < secondWord.length; i++) {
        s += secondWord.codePointAt(i) - 97;
    }
    for (let i = 0; i < targetWord.length; i++) {
        t += targetWord.codePointAt(i) - 97;
    }
    if ((Number(f) + Number(s)) == Number(t)) { return true } else { return false }

}

const firstWord = lines[0].trim();
const secondWord = lines[1].trim();
const targetWord = lines[2].trim();
console.log(solution(firstWord, secondWord, targetWord));