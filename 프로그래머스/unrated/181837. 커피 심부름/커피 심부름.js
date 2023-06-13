function solution(order) {
    let answer = 0;
    for (let i = 0; i < order.length; i++) {
        let menu = order[i]
    if (menu.indexOf("americano") != -1) {
        answer += 4500;
    } else if (menu.indexOf("cafelatte") != -1) {
        answer += 5000;
    } else {
        answer += 4500;
    }
    }
    return answer;
}