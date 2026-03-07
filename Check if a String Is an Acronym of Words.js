function solution(words, s) {
    // Write your code here
    let d = "";
    let e = words.length;
    for (let i = 0; i < e; i++) {
        let b = words.shift();
        let c = b[0];
        d += c;
    }
    let ss = s.toString();
    let dd = d.toString();
    if (ss === dd) {
        return true;
    }
    return;
}
let a = solution(["alice", "bob", "charlie"], "abc");