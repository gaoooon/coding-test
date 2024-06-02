function solution(my_string) {
  let answer = '';

  [...my_string].forEach((i, idx) => {
    if (my_string.indexOf(i) === idx) answer += i;
  });

  return answer;
}