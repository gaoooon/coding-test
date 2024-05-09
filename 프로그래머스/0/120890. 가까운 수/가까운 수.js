  function solution(array, n) {
    const obj = {};
    array.forEach((i) => {
      if (
        obj[String(Math.abs(n - i))] &&
        obj[String(Math.abs(n - i))] > String(i)
      ) {
        obj[String(Math.abs(n - i))] = String(i);
      } else if (!obj[String(Math.abs(n - i))]) {
        obj[String(Math.abs(n - i))] = String(i);
      }
    });
      console.log(obj["8"]);
    const answer = Number(obj[Math.min(...Object.keys(obj))]);

    return answer;
  }