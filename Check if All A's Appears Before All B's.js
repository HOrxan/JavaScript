function solution(s) {
    // Write your code here
    let a=0;
    let b ="";
     for(let i = 0; i < s.length; i++){
        if (a > s.charCodeAt(i)) {
             return false;
        }
        a = s.charCodeAt(i);
     }
    return true; 
}