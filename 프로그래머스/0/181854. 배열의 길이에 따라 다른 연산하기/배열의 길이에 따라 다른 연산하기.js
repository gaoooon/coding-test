function solution(arr, n) {
    let answer;
    
    if(arr.length % 2 === 0) {
      answer = arr.map((num, idx) => idx % 2 === 0 ? num : num + n);
    } else {
      answer = arr.map((num, idx) => idx % 2 === 0 ? num + n : num);
    }
    
    return answer;
}