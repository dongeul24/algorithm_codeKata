function solution(angle) {
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

// 기발한 solution 발견

// function solution(angle) {
//   return [0, 90, 91, 180].filter((x) => angle >= x).length;
// }
