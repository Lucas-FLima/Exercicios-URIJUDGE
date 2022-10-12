let input = require("fs").readFileSync("stdin", "utf-8");

// Recebendo as variáveis e transformando em inteiros
let lines = input.split("\n").map((t) => parseInt(t));

// Colocando as variáveis em ordem crescente
lines.sort((a, b) => a - b);

// Definindo o acumulador
let somaImpares = 0;

// Contador
let count = 1;

// Looping para a soma
while (lines[0] + count < lines[1]) {
  let valorVerificacao = lines[0] + count;
  if (valorVerificacao % 2 !== 0) {
    somaImpares = somaImpares + valorVerificacao;
  }
  count += 1;
}

// Printando na tela
console.log(somaImpares);