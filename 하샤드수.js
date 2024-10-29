function solution(x) {
  let numArray = x
    .toString()
    .split("")
    .map((number) => parseInt(number));
  let sum = numArray.reduce((acc, cur) => acc + cur);
  return x % sum === 0 ? true : false;
}
