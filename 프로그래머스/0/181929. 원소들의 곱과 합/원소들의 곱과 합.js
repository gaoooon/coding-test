function solution(num_list) {
    const sum = num_list.reduce((a, c) => a + c);
    const square = sum * sum;
    const multiplication = num_list.reduce((a, c)=> a * c);
    return square > multiplication ? 1 : 0;
}