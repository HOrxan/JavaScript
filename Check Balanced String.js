function solution(s) {
    // Write your code here
    let a = s.length;
    for (let i = 0; i < s.length; i++) {
        const e1 = s[i + 1];
        const e2 = s[i + 2];
        if (e1 == e2) {
            return true
        } else { return false }
    }
}