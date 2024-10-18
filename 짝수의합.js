function solution(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

//기발한 풀이

// function solution(n) {
//   var half = Math.floor(n / 2);
//   return half * (half + 1);
// }

// function solution(n) {
//   var answer = 0;

//   for (let i = 2; i <= n; i += 2) answer += i;

//   return answer;
// }
