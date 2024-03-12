function solution(name, yearning, photo) {
    const answer = [];
    const obj = {};
    name.forEach((item, index) => {obj[item] = yearning[index];});
    
    for(let i = 0; i < photo.length; i++) {
        const arr = [];
        photo[i].forEach((i) => { if(obj[i]) arr.push(obj[i])});
        
        const sum = arr.reduce((a, b) => a + b, 0);
        
        answer.push(sum);
    }
    
    
    return answer;
}