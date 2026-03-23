function solution(s1, s2) {
    // Write your code here
    let t1;
    let t2;
    let t3 = 0;
    for (let i = 0; i < s1.length; i++) {
        t1 = s1[i];
        t2 = s2[i];
        if (t1 == t2) {
            t3 += 1;
        } else { t3 += 0; }
    }
    if (t3 > 0) {
        return true;
    } else { return false; }
}