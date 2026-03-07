function solution(s) {
    // Write your code here
    let t = s.split(" ");
    let e;
    let n;
    let m = 0;
    let b = 0;
    for (let i = 0; i < t.length; i++) {
        e = t[i];
        n = Number(e);
        if (Number.isNaN(n)) {
            continue; // Changed from b+=0 to continue for clarity
        } else {
            if (b >= n) {
                return false;
            } else {
                b = n;
            }
        }
    }
    return true;
}