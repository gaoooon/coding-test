function solution(num_list, n) {
    const answer = [...num_list.splice(n), ...num_list.splice(0, n)];
    return answer;
}