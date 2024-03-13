function solution(myString) {
    const splitAnswer = myString.split("x").sort();
    const answer = [];
    splitAnswer.forEach((i) => { if(i !== "") answer.push(i)})
    return answer;
}