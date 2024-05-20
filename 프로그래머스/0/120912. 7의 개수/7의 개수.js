function solution(array) {
    const answer = [...array.join("")].filter((i) => i === "7").length;
    return answer;
}