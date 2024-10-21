function solution(n) {
  const numberToArray = n.toString()
    .split('').map(Number);
  let sum = 0;
  numberToArray.forEach(element => {
    sum += element;
  });
  return sum;
}