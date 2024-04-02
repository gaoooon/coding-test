function solution(my_string, indices) {
    const answer = [...my_string].filter((item, idx) => !indices.includes(idx)).join("");
    
    return answer;
}