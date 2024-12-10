function solution(t, p) {
  const pLength = p.length;
  const tLength = t.length;
  let count = 0;
  let pointer = 0;

  for (pointer = 0; pointer + pLength <= tLength; pointer++) {
    if (t.slice(pointer, pointer + pLength) <= Number(p)) {
      count++;
    }
  }


  return count;
}

solution("3141592", "271");

solution("10203", "15");