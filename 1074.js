let input = require("fs").readFileSync("stdin", "utf-8");
let ta = input.split("\n").map((t) => parseInt(t));

[n, ...lines] = ta;

let count = 0;
while (count < n) {
  if (lines[count] !== 0) {
    if (lines[count] < 0) {
      if (lines[count] % 2 !== 0) {
        console.log(`ODD NEGATIVE`);
      } else {
        console.log(`EVEN NEGATIVE`);
      }
    } else {
      if (lines[count] % 2 !== 0) {
        console.log(`ODD POSITIVE`);
      } else {
        console.log(`EVEN POSITIVE`);
      }
    }
  } else {
    console.log(`NULL`);
  }
  count += 1;
}