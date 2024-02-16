function solution(absolutes, signs) {
  const answer = absolutes.reduce(
    (accumulator, currentValue, currentIndex) =>{ console.log(accumulator)
     return accumulator + (signs[currentIndex] ? currentValue : -1 * currentValue)}
  , 0);

  return answer;
}