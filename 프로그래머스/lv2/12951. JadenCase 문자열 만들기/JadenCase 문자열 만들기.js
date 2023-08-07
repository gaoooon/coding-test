function solution(s) {
    let answer = [...s]
    const number = /[0-9]/
    const result = [];
        result.push(answer[0].toUpperCase());
    for (let i = 1; i < answer.length; i++) {
        answer[i - 1] === " " ? result.push(answer[i].toUpperCase()) : result.push(answer[i]?.toLowerCase())
    }
    answer = result.join("");
    return answer;
}