function solution(s) {
  numberArray = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ];

  numberArray.forEach((number, index) => {
     const regex = new RegExp(number, "g"); 
     s = s.replace(regex, index);
  })
  
  return Number(s)
}

console.log(solution("one4seveneight")); //1478
