const getSec = (value) => {
  const splittedOp_end = value.split(':');
  return Number(splittedOp_end[0] * 60) + Number(splittedOp_end[1]);
};

function solution(video_len, pos, op_start, op_end, commands) {
  let op_startSec = getSec(op_start);

  let op_endSec = getSec(op_end);

  let posSec =
    getSec(op_start) <= getSec(pos) && getSec(pos) <= getSec(op_end)
      ? getSec(op_end)
      : getSec(pos);

  let video_lenSec = getSec(video_len);

  const time = [
    posSec,
    ...commands.map((value) => (value === 'next' ? 10 : -10)),
  ].reduce((a, c) => {
     
    if (a < 0) a = 0;
    if (video_lenSec < a) a = video_lenSec;
    if (op_startSec <= a && a <= op_endSec) a = op_endSec;
    
    const answer = a + c;
      
    if (answer < 0) return 0;
    if (video_lenSec < answer) return video_lenSec;
    if (op_startSec <= answer && answer <= op_endSec) return op_endSec;
    return answer;
  });

  const answer =`${Math.floor(time / 60)
          .toString()
          .padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`;

  return answer;
}