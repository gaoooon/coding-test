const obj = {
  '1': 'w',
  '-10': 'a',
  '-1': 's',
  '10': 'd',
};

function solution(numLog) {
  const answer = [];
  const toStringArr = numLog.map((i) => String(i));

  for (let i = 0; i < toStringArr.length; i++) {
    if (!i) {
      if (toStringArr[i] !== '0') answer.push(obj[toStringArr[i]]);
    } else {
      answer.push(obj[(toStringArr[i - 1] - toStringArr[i]) * '-1']);
    }
  }

  return answer.join('');
}
