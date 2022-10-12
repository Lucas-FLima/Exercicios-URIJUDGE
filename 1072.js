let input = require("fs").readFileSync("stdin", "utf-8");
let ta = input.split("\n").map((t) => parseInt(t));

[n, ...lines] = ta;

let dentro = 0;
let fora = 0;

for (let i = 0; i < n; i++) {
  if ((lines[i] >= 10) & (lines[i] <= 20)) {
    dentro += 1;
  } else {
    fora += 1;
  }
}

console.log(`${dentro} in`);
console.log(`${fora} out`);
