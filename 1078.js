let input = require("fs").readFileSync("stdin", "utf-8");
let x = parseInt(input);

for (let i = 1; i < 11; i++) {
  let resultado = i * x;
  console.log(`${i} x ${x} = ${resultado}`)
}
