function solution(board) {
  const mineCoordinates = [];
  let answer = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        mineCoordinates.push(`${i}|${j}`);
      }
    }
  }

  const deltas = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],  [0, 0],  [0, 1],
    [1, -1],  [1, 0],  [1, 1],
  ];

  mineCoordinates.forEach((a) => {
    deltas.forEach(([dx, dy]) => {
      const nx = Number(a.split("|")[0]) + dx;
      const ny = Number(a.split("|")[1]) + dy;
        
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < board.length &&
        ny < board[0].length
      ) {
        board[nx][ny] = 1;
      }
    });
  });
    
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) {
        answer++;
      }
    }
  }
    
  return answer;
}