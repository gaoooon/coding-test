const solution = (arr, intervals) => intervals.flatMap((i) => arr.slice(i[0], i[1] + 1));
