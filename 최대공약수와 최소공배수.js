function solution(n, m) {
  function gcd(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  const gcdValue = gcd(n, m);
  const lcmValue = lcm(n, m);

  return [gcdValue, lcmValue];
}
