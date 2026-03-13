const fs = require('fs');

const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

function solution(nums, target) {
    // Write your code here
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
    
    return []; // Added return statement for cases where no solution is found
}

const nums = JSON.parse(lines[0]);
const target = parseInt(lines[1]);

console.log(JSON.stringify(solution(nums, target)));