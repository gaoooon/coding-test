function solution(d, budget) {
  let temp = budget;
  let result = 0;
  d.sort(function (number1, number2) {
    return number1 - number2;
  });
  for (let num = 0; num < d.length; num++) {
    if (temp < 0) {
      break;
    } else if (0 < temp && d[num] <= temp) {
      temp -= d[num];
      result++;
    }
  }
  return result;
}