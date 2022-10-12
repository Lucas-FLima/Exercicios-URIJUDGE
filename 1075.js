let input = require("fs").readFileSync("stdin", "utf-8");
let x = parseInt(input);

let count = 0;
while (count < 10000) {
  let ver = 1 + count;
  if (ver % x === 2) {
    console.log(ver);
  }
  count += 1;
}