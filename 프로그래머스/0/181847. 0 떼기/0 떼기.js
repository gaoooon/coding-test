function solution(n_str) {
  const startIndex = n_str.search(/[1-9]/);
  const answer = n_str.substr(startIndex);

  return answer;
}