function solution(s, n) {
  return s
    .split("")
    .map((char) => {
      if (/[a-z]/.test(char)) {
        // 소문자 처리
        return String.fromCharCode(((char.charCodeAt(0) - 97 + n) % 26) + 97);
      } else if (/[A-Z]/.test(char)) {
        // 대문자 처리
        return String.fromCharCode(((char.charCodeAt(0) - 65 + n) % 26) + 65);
      } else {
        // 공백 처리
        return char;
      }
    })
    .join("");
}
