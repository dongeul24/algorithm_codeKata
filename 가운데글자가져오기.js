function solution(s) {
  let length = s.length;
  let mid = Math.floor(length / 2);
  return length % 2 === 0 ? s[mid - 1] + s[mid] : s[mid];
}
