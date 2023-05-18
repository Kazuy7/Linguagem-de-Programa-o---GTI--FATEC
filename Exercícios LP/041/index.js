let numero = parseFloat(prompt("Digite um número maior que zero:"));
let ref = 0;
if (numero <= 0) {
    document.write("Digite um número maior que zero!")
} else if (numero > 0) {
    while (ref < numero) {
        ref++
        document.write(`${ref} `)
    }
}