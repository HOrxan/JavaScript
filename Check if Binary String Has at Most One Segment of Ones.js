function solution(s) {
    // Write your code here
    let a = Infinity;
    let b = "";
    for (let i = 0; i < s.length; i++) {
        if (a < s.charCodeAt(i)) {
            return false;
        } else {
            a = s.charCodeAt(i);
        }
    }
    return true;
}