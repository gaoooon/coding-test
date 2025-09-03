function solution(quiz) {
  const answer = quiz.map((quiz) => {
      const [formula, ans] = quiz.split("=");
      const [x, sign, y] = formula.split(" ");
      
      if (sign === "+") return Number(x) + Number(y) === Number(ans) ? "O" : "X"
      else return Number(x) - Number(y) === Number(ans) ? "O" : "X"
  });
    
  return answer;
}