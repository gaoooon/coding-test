function solution(strArr) {
    const answer = strArr.map((item, index) => index % 2 === 0 ? item.toLowerCase() : item.toUpperCase());
    return answer;
}