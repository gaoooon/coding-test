function solution(s){
    if (s.length % 2 === 1) {
        return false;
    }
    const splitedS = [...s];
    
    const stack = [];
    
    
    
    for(let i = 0; i < splitedS.length; i ++) {
        if (splitedS[i] === "(") { stack.push(splitedS[i])}
        if (splitedS[i] === ")") { 
            stack.push(splitedS[i])
            stack.pop();
        stack.pop();
        }
    
    }
    
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
    
}