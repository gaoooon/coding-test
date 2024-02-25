function solution(strArr) {
  const strLeng = {};

  strArr.forEach((i) => {
    strLeng[`${i.length}`]
      ? (strLeng[`${i.length}`] += 1)
      : (strLeng[`${i.length}`] = 1);
  });

  return Math.max(...Object.values(strLeng));
}