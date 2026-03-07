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