function solution(num_list) {
  let minus = -1;

  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] < 0) {
      minus = i;
      break;
    }
  }

  return minus;
}