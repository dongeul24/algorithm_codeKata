function solution(s) {
  const stringArray = s.split(" ")
  const changedStringArray = stringArray.map((word) => {
   return [...word]
     .map((char, index) =>
       index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
     )
     .join("");
  })
  return changedStringArray.join(" ")
}

console.log(solution("try hello world"));