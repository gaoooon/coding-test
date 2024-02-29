function solution(num_list) {
  const [a, b, c, d, e] = num_list.sort((a, b) => a - b);
  return [a, b, c, d, e];
}
