function solution(num_str) {
    const answer = [...num_str].reduce((a, c) => a + Number(c), 0);
    return answer;
}