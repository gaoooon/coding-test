function solution(myString, pat) {
    const answer = myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
    return answer;
}