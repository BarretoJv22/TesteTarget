function SequenciaFibonacci(num) {
    let sequencia = [0, 1];  // Inicializa com os dois primeiros números de Fibonacci
    let a = 0;
    let b = 1;
    let temp;

    // Gera a sequência de Fibonacci até o número informado ou até ultrapassá-lo
    while (b < num) {
        temp = a + b;
        a = b;
        b = temp;
        sequencia.push(b);
    }

    // Verifica se o número informado pertence à sequência
    if (sequencia.includes(num)) {
        console.log(`${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${num} não pertence à sequência de Fibonacci.`);
    }

    // Exibe a sequência de Fibonacci
    console.log('Sequência de Fibonacci:', sequencia.join(', '));
}

// Exemplo de uso:
const numero = 34
SequenciaFibonacci(numero);