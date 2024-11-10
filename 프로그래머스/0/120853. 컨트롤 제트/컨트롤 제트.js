function solution(s) {
  let prevNum;
  const splittedStr = s.split(" ");
  const answer = splittedStr.reduce((a, c) => {
    if (c !== "Z") prevNum = Number(c);
      
    return c === "Z" ? Number(a) + -1 * prevNum : Number(a) + Number(c);
  }, 0);

  return answer;
}
