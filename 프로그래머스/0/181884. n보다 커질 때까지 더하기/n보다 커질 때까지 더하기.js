function solution(numbers, n) {
    let answer = 0;
    
    for (let i of numbers) {
        answer += i;
        if (n < answer) break;
    }
    
    return answer;
}