function solution(num_list) {
  const answer =
    num_list.length > 10
      ? num_list.reduce((a, b) => a + b, 0)
      : num_list.reduce((a, b) => (a *= b));
  return answer;
}
