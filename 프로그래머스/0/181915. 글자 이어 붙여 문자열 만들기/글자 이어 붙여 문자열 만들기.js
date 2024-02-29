function solution(my_string, index_list) {
  const answer = index_list.map((i) => my_string[i]).join("");

  return answer;
}
