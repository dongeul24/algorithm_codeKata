function solution(arr) {
  const sortedArray = [...arr];
  sortedArray.sort((a, b) => b - a);
  const smallest = sortedArray.pop()
  return sortedArray.length === 0
    ? [-1]
    : arr.filter((element) => element !== smallest);
}
