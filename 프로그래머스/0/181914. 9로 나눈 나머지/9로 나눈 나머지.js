function solution(number) {
    const sum = [...number].reduce((a, c) => a + Number(c), 0);
    return sum % 9;
}