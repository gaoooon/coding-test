function solution(myString) {
    let answer = [];
    let count = 0;
    
    [...myString].forEach((i) => {
        if(i === "x") {
            answer.push(count);
            count = 0;
            
        } else {
            count += 1;
        }
    })
    answer.push(count);
    
    return answer;
}