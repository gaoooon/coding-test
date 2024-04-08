function solution(my_string, is_suffix) {
    const answer = my_string.substring(my_string.length - is_suffix.length) === is_suffix ? 1 : 0;

    return answer;
}