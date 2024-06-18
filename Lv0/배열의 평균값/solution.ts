export default function solution(numbers: number[]) {
  var total = numbers.reduce((acc, cur) => {
    return acc + cur;
  });

  var result = total / numbers.length;

  return result;
}
