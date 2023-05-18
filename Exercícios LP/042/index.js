let numero = parseFloat(prompt("Digite um número menor que dez:"))
let ref = 20;

if (numero >= 10) {
    document.write("Digite um valor menor que DEZ!!!")
} else if (numero < 10) {
    while (ref >= numero) {
        document.write(`${ref} `)
        ref--;
    }
}