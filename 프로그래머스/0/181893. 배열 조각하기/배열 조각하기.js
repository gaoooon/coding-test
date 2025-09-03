function solution(arr, query) {
    let answer = [...arr];
    
    query.forEach((query, index) => {
        if (index % 2 === 0) {
            answer.splice(query + 1)
        } else {
            answer.splice(0, query)
        }
    });
    
    return answer
}