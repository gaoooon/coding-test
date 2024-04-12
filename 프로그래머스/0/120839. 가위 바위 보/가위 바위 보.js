const obj = {
    "2" : "0",
    "0" : "5",
    "5" : "2"
};

function solution(rsp) {
    const answer = [...rsp].map((i) => obj[i]).join("");
    return answer;
}