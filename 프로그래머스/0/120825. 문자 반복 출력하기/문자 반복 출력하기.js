function solution(my_string, n) {
    const answer = [...my_string].map((str) => str.repeat(n)).join("");
    
    
    return answer;
}