function solution(new_id) {
    let answer = [];
    const special = /[a-z]/;
    const number = /^[0-9]+$/;
    const small = /[-_.]/;
    let lowerStr = new_id.toLowerCase();
    let test = [...lowerStr];
    for (let i = 0; i < test.length; i++) {
        if (small.test(test[i]) === true) {
                answer.push(test[i]);
        } else if (special.test(test[i]) === true) {
                answer.push(test[i]);
        } else if (number.test(test[i]) === true) {
                answer.push(test[i]);
        }
    }
    answer = answer.join("");
     while (answer.includes('..')) {
    answer = answer.replace('..', '.');
  } 
    if(answer.charAt(0) == ".") {
        answer = answer.slice(1);
    }
    if (answer.length > 15) {
        answer = answer.slice(0, 15);
    }
    while(answer.charAt(answer.length - 1) == ".") {
        answer = answer.slice(0, -1);
    }
    if (answer.length === 0) {
        answer = "a";
    }
    while (answer.length <= 2) {
        const last = answer.charAt(answer.length - 1);
        answer = `${answer}${last}`
    }
    return answer;
}

const new_id = "...!@BaT#*..y.abcdefghijklm."