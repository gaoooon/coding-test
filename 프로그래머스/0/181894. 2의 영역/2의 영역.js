function solution(arr) {
    if (!arr.includes(2)) return [-1];
    
    const front = arr.indexOf(2);
    const back = arr.length - [...arr].reverse().indexOf(2);
    const answer = arr.slice(front, back);
    return answer;
}