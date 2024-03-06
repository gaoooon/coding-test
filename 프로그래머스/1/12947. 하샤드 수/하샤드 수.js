function solution(x) {
  const sum = [...String(x)].reduce((a, b) => a + Number(b), 0);
  return x % sum === 0 ? true : false;
}
