function solution(s) {
  const leng = s.length;

  return leng % 2 === 0
    ? s[leng / 2 - 1] + s[leng / 2]
    : s[Math.floor(leng / 2)];
}