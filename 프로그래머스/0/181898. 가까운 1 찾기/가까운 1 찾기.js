function solution(arr, idx) {
  let answer = -1;
  const filterd = [];

  arr.forEach((item, index) => {
    if (item === 1 && index >= idx) filterd.push(index);
  });

  if (filterd.length) answer = filterd[0];

  return answer;
}
