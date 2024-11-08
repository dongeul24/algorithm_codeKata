function solution(absolutes, signs) {
  var answer = 0;
  signs.forEach(function (item, index) {
    item ? (answer += absolutes[index]) : (answer -= absolutes[index]);
  });
  return answer;
}
