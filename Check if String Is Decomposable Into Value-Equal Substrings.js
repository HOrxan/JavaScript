function solution(s) {
    // Write your code here
    let s1 = s[0];
    let s2;
    let s3;
    for (let i = 1; i < s.length; i++) {
        s2 = s[i];
        if (s1 !== s2) {
            s3 = i;
            break;
        }
    }
    if (s3 === undefined) {
        s3 = s.length;
    }
    let s4 = s3 % 3;
    if (s4 === 1) { return false; } else { return true };
}