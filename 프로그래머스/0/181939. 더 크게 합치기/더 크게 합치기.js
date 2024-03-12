function solution(a, b) {
    const toStringA = String(a);
    const toStringB = String(b);
    
    return Math.max(Number(toStringA + toStringB), Number(toStringB + toStringA)) ;
}