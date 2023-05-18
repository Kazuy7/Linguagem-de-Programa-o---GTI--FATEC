const n1 = parseFloat(prompt("Digite um número:"));
const n2 = parseFloat(prompt("Digite outro número:"));
const soma = n1 + n2;

if (soma > 10) {
    const raizc = Math.pow(soma, 1.0 / 3);
    document.write(`Os números digitados foram ${n1} e ${n2}, a soma desses valores é ${soma} e sua raiz cúbica é ${raizc}`);
} else {
    document.write(`Os números digitados foram ${n1} e ${n2}, a soma desses valores é ${soma}.`);
}