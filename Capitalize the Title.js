function solution(title) {
    // Write your code here
    let a = title.toLowerCase();
    let b = a.split(" ");
    let c, k, s, t, y = "";
    for (let i = 0; i < b.length; i++) {
        c = b[i];
        k = c[0]
        s = k.toUpperCase();
        t = c.slice(1, c.length);
        y += s + t + " ";
    }
    return y;
}