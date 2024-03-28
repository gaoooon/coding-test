function solution(names) {
  const list = [...names];
  const answer = [];

  while (list.length !== 0) {
    answer.push(list[0]);

    for (let i = 1; i <= 5; i++) list.shift();
  }

  return answer;
}
