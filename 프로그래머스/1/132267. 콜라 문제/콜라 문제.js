function solution(a, b, n) {
    let emptyBottle = n;
    let newBottle = 0;
    let bool = true;
    let answer = 0;
    
    while (bool) {
        if (emptyBottle % a === 0) {
            newBottle = (emptyBottle / a) * b;
            emptyBottle = 0;
        } else {
            newBottle = (Math.floor(emptyBottle / a)) * b;
            emptyBottle = emptyBottle % a;
        }
        answer += newBottle;
        emptyBottle += newBottle;
        
        if (Math.floor(emptyBottle / a) === 0) bool = false;
    }
    
    return answer;
}