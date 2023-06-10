
### [약수의 개수와 덧셈](https://school.programmers.co.kr/learn/courses/30/lessons/77884)
``` js
function solution(left, right) {
    let answer = 0;
    for (let j = left; j <= right; j++) {
        let count = 0;
        for (let k = 1; k <= j; k++) {
            if (j % k === 0) {
                count++;
            }
        }
        if (count % 2 === 0) {
            answer += j;
        } else {
            answer -= j;
        }
    }
    return answer;
}
```