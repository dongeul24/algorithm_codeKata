function solution(left, right) {
  let answer = 0;
  for (let i = left; i < right + 1; i++) {
    Number.isInteger(Math.sqrt(i)) ? (answer -= i) : (answer += i);
  }

  return answer;
}
