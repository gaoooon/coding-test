function solution(my_string) {
    const answer = [...my_string.toLowerCase()].sort().join("");
    return answer;
}