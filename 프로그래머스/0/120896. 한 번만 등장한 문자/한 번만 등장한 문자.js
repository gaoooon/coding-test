function solution(s) {
  const answer = [];
  const count = {};
  const arr = [...s];

  arr.forEach((i) => (count[i] ? (count[i] += 1) : (count[i] = 1)));
  const stringArr = Object.keys(count);
  Object.values(count).forEach((i, idx) => {
    if (i === 1) {
      answer.push(stringArr[idx]);
    }
  });
    
  return answer.sort().join("");
}
