function solution(my_string) {
  const RegExp = /[aeiouAEIOU]/g;
  const answer = my_string.replaceAll(RegExp, "");

  return answer;
}
