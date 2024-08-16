function solution(n) {
    const answer = [];
    const arr =  [...Array(n)].map((_, idx) => idx === 0 ? 1 : 0);
    
    for (let i = 0; i < n; i++) {
        answer.push([...arr]);
        arr.pop();
        arr.unshift(0);
    }
    
    return answer;
}