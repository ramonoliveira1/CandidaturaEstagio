// Definindo o número a ser verificado
const numeroVerificado = 21;

// Iniciando a sequência de Fibonacci com 0 e 1
let fib = [0, 1];

// Calculando a sequência de Fibonacci até atingir um valor maior ou igual ao número verificado
while (fib[fib.length - 1] < numeroVerificado) {
  const proximoValor = fib[fib.length - 1] + fib[fib.length - 2];
  fib.push(proximoValor);
}

// Verificando se o número verificado pertence à sequência de Fibonacci
if (fib.includes(numeroVerificado)) {
  document.write(`${numeroVerificado} pertence à sequência de Fibonacci: ${fib}`);
} else {
    document.write(`${numeroVerificado} não pertence à sequência de Fibonacci: ${fib}`);
}