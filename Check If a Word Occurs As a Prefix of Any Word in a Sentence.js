function solution(sentence, searchWord) {
    // Write your code here
    let m =sentence.indexOf(searchWord);
    if(m == 0){return 1};
    if(m == -1){return -1};
    let s = sentence.slice(0, m);
    let a = s.match(/ /g);
    let t = a.length+1;
    return t;
}