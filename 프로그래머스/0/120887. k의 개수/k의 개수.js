function solution(i, j, k) {
    let answer = 0;
    
    for (let n = i; n <= j; n++) {
        const list = [...String(n)];
        list.forEach((i) => {
            if(i == k) answer += 1;
        })
    }
    
    return answer;
}