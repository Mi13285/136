function solve(s) {
  let [up, low] = [0, 0];
  s.split("").map((l) => (l == l.toUpperCase() ? (up += 1) : (low += 1)));
  return up > low ? s.toUpperCase() : s.toLowerCase();
}
console.log(solve("code"));
