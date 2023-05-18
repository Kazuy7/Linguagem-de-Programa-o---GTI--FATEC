const numero = parseFloat(prompt("Digite um número:"));
const quadn = Math.pow(numero, 2);

if (numero <= 0) {
    document.write("Digite um valor maior que zero!");
} else if (quadn > 10) {
    const cubn = Math.pow(numero, 3);
    document.write(`O valor ao quadrado é ${quadn}, elevado ao cubo é ${cubn} e é maior que DEZ.`)
} else if (quadn < 10) {
    document.write(`O valor ao quadrado é ${quadn} e é menor que DEZ.`)
} else if (quadn == 10) {
    document.write(`O valor ao quadrado é igual a DEZ.`)
}