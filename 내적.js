function solution(a, b) {
  return a.reduce((acc, cur, index) => (acc += a[index] * b[index]), 0);
}
