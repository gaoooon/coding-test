function solution(numbers, direction) {
    const answer = numbers;
    
    if (direction === "right") {
        answer.unshift(answer[answer.length - 1]);
        answer.pop();
    } else {
        answer.push(answer[0]);
        answer.shift();
    }
    
    return answer;
}