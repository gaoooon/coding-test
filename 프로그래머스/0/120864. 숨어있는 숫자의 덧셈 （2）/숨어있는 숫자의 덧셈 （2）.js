function solution(my_string) {
    const arr = [...my_string];
    const filterdStr = arr.map((str) => str.replace(/^[A-Za-z]+$/,' ')).join('');
    const splitedNumber = filterdStr.split(' ');
    const answer = splitedNumber.reduce((a, c) => Number(a) + Number(c), 0);
    
    return answer;
}