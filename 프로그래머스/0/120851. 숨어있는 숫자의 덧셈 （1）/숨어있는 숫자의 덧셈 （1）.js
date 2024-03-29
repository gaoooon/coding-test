function solution(my_string) {
    const arr = [...my_string].map((i) => Number(i));
    let answer = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if (arr[i]) answer += arr[i]
    }
    
    return answer;
}