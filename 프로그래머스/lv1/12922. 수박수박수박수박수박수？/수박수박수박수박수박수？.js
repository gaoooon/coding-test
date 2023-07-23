function solution(n) {
    const arr = [];
    
    for (let i = 1; i <= n; i++) {
        const a = i % 2;
        const b = a === 0 ? "박": "수";
        arr.push(b);
    }
    
    const answer = arr.join('');
    return answer;
}