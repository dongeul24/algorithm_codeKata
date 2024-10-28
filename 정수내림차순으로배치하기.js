function solution(n) {
  let numbers = n.toString().split("").map((number) => parseInt(number))
  return parseInt(numbers.sort((a, b) => b - a).join(''));
}

