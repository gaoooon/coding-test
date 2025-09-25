function solution(number) {
  const combinationList = [];
  const array = [];
  const tag = {};
  const tagKeys = [];

  number.forEach((num, idx) => {
    tag[idx] = num;
    tagKeys.push(idx);
  });

  const recursion = (num, arr) => {
    if (num === 3) {
      const newArrary = [...array];
      const sortArray = newArrary.sort();

      // console.log(array);
      // console.log(!combinationList.includes(sortArray))

      if (!combinationList.includes(JSON.stringify(sortArray)))
        combinationList.push(JSON.stringify([...sortArray]));

      return;
    }

    arr.forEach((item, idx) => {
      array.push(item);
      const newArr = [...arr];
      newArr.splice(idx, 1);

      recursion(array.length, newArr);
      array.pop();
    });
  };

  recursion(0, [...tagKeys]);
    
  console.log(combinationList)

  const answer = combinationList.filter(
    (combination) => JSON.parse(combination).reduce((a, c) => a + tag[c], 0) === 0
  ).length;

  return answer;
}
