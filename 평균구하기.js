function solution(arr) {
  return arr.reduce(
    (accumulator, currentNumber) => accumulator + currentNumber
  ) / arr.length;
}
