function solution(my_string) {
  let arr = my_string.split(' ');
  let nums = [];
  let opers = [];
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      nums.push(Number(arr[i]));
    } else {
      opers.push(arr[i]);
    }
  }

    answer = nums[0];
    nums.shift();
    
  while (opers.length > 0) {
    if (opers[0] === '+') {
      answer += nums[0]
    } else {
      answer -= nums[0];
    }

    nums.shift();
    opers.shift();
  }
    
  return answer;
}
