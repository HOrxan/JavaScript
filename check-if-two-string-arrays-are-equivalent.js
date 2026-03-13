const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

function solution(word1, word2) {
    // Write your code here
    if (word1.join("") == word2.join("")) {return true}
    else{return false}
}

const word1 = JSON.parse(lines[0]);
const word2 = JSON.parse(lines[1]);
console.log(solution(word1, word2));