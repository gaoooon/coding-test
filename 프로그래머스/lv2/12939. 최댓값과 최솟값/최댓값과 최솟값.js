function solution(s) {
    let  answer = s.split(" ")
    answer = answer.sort((a, b) => a - b);
    answer = answer.filter((num) => num === answer[0] || num === answer[answer.length - 1]);
    answer = `${answer[0]} ${answer[1]}`;

    return answer;
}