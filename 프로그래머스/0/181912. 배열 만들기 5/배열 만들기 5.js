function solution(intStrs, k, s, l) {
  const answer = [];
  intStrs.forEach((i) => {
    const num = Number(i.substr(s, l));
    if (num > k) answer.push(num);
  });

  return answer;
}
