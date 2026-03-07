function solution(s, t) {
    // Write your code here
    let a = s.replace(/#/g, "");
    let b = t.replacel(/#/g, "");
    if (a.length - 1 == b.length - 1) {
        if (a[0] == b[0]) {
            if (a[a.length - 1] == b[b.length - 1]) {
                return true;
            } else { return false; }
        } else { return false; }
    } else { return false; }
}