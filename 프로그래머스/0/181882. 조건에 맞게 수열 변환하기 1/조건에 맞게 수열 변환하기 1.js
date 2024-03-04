function solution(arr) {
  return arr.map((i) =>
    i >= 50 && i % 2 === 0 ? i / 2 : i < 50 && i % 2 !== 0 ? i * 2 : i
  );
}
