function solution(numbers) {
  return (
    numbers.reduce(
      (accumulator, currentNumber) => accumulator + currentNumber
    ) / numbers.length
  );
}
