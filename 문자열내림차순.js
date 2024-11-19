function solution(s) {
  const arr = [...s];
  arr.sort().reverse();
  return arr.join("");
}
