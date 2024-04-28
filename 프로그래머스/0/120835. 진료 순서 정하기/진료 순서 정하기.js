function solution(emergency) {
    const list = [...emergency].sort((a, b) => b - a);
    const answer = emergency.map((i) => list.indexOf(i) + 1);
    
    return answer;
}