export default function solution(n: number, computers: number[][]) {
  var result = 0;

  for (var i = 0; i < computers.length; i++) {
    var sum = computers[i].reduce((acc, cur) => {
      return acc + cur;
    });
    result += sum;
  }

  return n - result;
}
