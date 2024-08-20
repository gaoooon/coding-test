function solution(before, after) {
  const splitedBefore = [...before];
  const splitedAfter = [...after];

  splitedAfter.forEach((i) => {
    if (!splitedBefore.includes(i)) return 0;
        
    splitedBefore.splice(splitedBefore.indexOf(i), 1);
  });

  return splitedBefore.length > 0 ? 0 : 1;
}
