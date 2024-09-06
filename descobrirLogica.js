function proximoElemento() {
    // a) Sequência ímpar
    let a = [1, 3, 5, 7];
    let proximoA = a[a.length - 1] + 2; 
    console.log(`a) ${a.join(", ")}, ${proximoA}`);

    // b) Sequência de potências de 2
    let b = [2, 4, 8, 16, 32, 64];
    let proximoB = b[b.length - 1] * 2; 
    console.log(`b) ${b.join(", ")}, ${proximoB}`);

    // c) Sequência de quadrados perfeitos
    let c = [0, 1, 4, 9, 16, 25, 36];
    let proximoC = (Math.sqrt(c[c.length - 1]) + 1) ** 2; 
    console.log(`c) ${c.join(", ")}, ${proximoC}`);

    // d) Sequência de quadrados pares
    let d = [4, 16, 36, 64];
    let proximoD = (Math.sqrt(d[d.length - 1]) + 2) ** 2; 
    console.log(`d) ${d.join(", ")}, ${proximoD}`);

    // e) Sequência de Fibonacci
    let e = [1, 1, 2, 3, 5, 8];
    let proximoE = e[e.length - 1] + e[e.length - 2]; 
    console.log(`e) ${e.join(", ")}, ${proximoE}`);

    // f) Sequência misturada
    let f = [2, 10, 12, 16, 17, 18, 19];
    let proximoF = 20; 
    console.log(`f) ${f.join(", ")}, ${proximoF}`);
}


console.log(proximoElemento());