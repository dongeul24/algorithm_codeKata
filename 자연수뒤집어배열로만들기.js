function solution(n) {
  let result = n.toString().split('').reverse();
  return result.map((element) => parseInt(element))
}

// console.log(solution(1234))