function solution(number) {
    const combinations = getCombinations(number, 3);
    let count = 0;

    combinations.forEach((combination) => {
      if (combination.reduce((acc, cur) => acc + cur, 0) === 0) {
        count++;
      }
    });
  return count;
}

function getCombinations(arr, r) {
  const results = [];

  // r === 1일 경우 각 요소를 개별 배열로 반환
  if (r === 1) return arr.map((value) => [value]);

  arr.forEach((current, index) => {
    // 현재 요소 이후의 배열에서 (r-1)개의 조합 생성
    const smallerCombinations = getCombinations(arr.slice(index + 1), r - 1);
    // 현재 요소와 결합하여 결과 저장
    smallerCombinations.forEach((combination) => {
      results.push([current, ...combination]);
    });
  });

  return results;
}
