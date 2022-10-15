let input = require("fs").readFileSync("stdin", "utf-8");
let ta = input.split("\n");

[n, ...lines] = ta;

let pesos = [2, 3, 5];

for (let i = 0; i < n; i++) {
  let k = lines[i].split(" ").map(Number);
  let media = (k[0] * pesos[0] + k[1] * pesos[1] + k[2] * pesos[2]) / 10;
  console.log(media.toFixed(1));
}
