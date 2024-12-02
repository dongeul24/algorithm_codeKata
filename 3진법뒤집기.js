function solution(n) {
  const trinary = n.toString(3);
  const reversedTri = trinary.split("").reverse().join("");

  return parseInt(reversedTri, 3);
}
