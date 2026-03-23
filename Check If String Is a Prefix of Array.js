function solution(s, words) {
    // Write your code here
    let s3 = "";
    for (let i = 0; i < words.length; i++) {
        s3 += words[i];
        if (s == s3) {
            return true;

        }
    }
    return false;
}