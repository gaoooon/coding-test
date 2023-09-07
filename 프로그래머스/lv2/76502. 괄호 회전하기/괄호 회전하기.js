function solution(s) {
    const obj = {
        '}': '{',
        ']': '[',
        ')': '('
    };
    const parenthesis = [...s];
    const length = parenthesis.length;

    const stack = [];
    let answer = 0;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            const temp = parenthesis;
            stack.push(temp[j]);
            if (temp[j] === '}' || temp[j] === ')' || temp[j] === ']') {
                const left = obj[temp[j]];
                if (stack[stack.length - 2] === left) { // Check the second-to-last element
                    stack.pop(); // Pop the current closing bracket
                    stack.pop(); // Pop the matching opening bracket
                }
            }
        }
        let a = parenthesis[0];
        parenthesis.shift();
        parenthesis.push(a);
        if (stack.length === 0) {
            answer += 1;
        }
        stack.splice(0);
    }

    if (stack.length !== 0) {
        return 0; // 괄호 짝이 맞지 않으면 0 반환
    }

    return answer;
}

// Test cases

