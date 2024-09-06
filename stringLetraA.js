function verificarLetraA(str) {
    let count = 0;

    // Loop por todos os caracteres da string
    for (let i = 0; i < str.length; i++) {
        // Verifica se o caractere atual é 'a' ou 'A'
        if (str[i] === 'a' || str[i] === 'A') {
            count++;
        }
    }

    // Exibe o resultado
    if (count > 0) {
        console.log(`A letra 'a' aparece ${count} vez(es) na string.`);
    } else {
        console.log(`A letra 'a' não aparece na string.`);
    }
}

// Exemplo de uso:
const texto = "A Amazônia é um lugar incrível!";
verificarLetraA(texto);
