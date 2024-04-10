function solution(binomial) {
    const calArray = binomial.split(" ");
    const num1 = Number(calArray[0]);
    const num2 = Number(calArray[2]);
    
    switch (calArray[1]) {
        case '+':
          return num1 + num2;
            
        case '-':
          return num1 - num2;
        
        case '*':
          return num1 * num2;
    }    
}