 function solution(arr1, arr2) {
    let answer = 0;

    if (arr1.length < arr2.length) answer = -1;
    else if (arr1.length > arr2.length) answer = 1;
    else {
      const arr1Sum = arr1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      const arr2Sum = arr2.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      if (arr1Sum < arr2Sum) return -1;
      else if (arr1Sum > arr2Sum) return 1;
      else return 0;
    }

    return answer;
  }
