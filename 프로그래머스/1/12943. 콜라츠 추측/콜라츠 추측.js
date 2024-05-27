function solution(num) {
    let a = num;
    
    for(let i = 0; i <= 500; i++) {
        if(a === 1) return i;
        
        if(a % 2 === 0) {
            a /= 2;
        } else {
            a *= 3;
            a += 1;
        }
    }
    
    return -1;
}