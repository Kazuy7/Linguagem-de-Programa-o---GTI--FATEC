const D = parseFloat(prompt("Digite um valor para a diagonal maior D:"));
const d = parseFloat(prompt("Digite um valor para a diagonal menor d:"));

if (D <= 0 || d <= 0) {
    document.write("Erro! Digite um valor maior que zero.")
} else {
    const divD = D / 2;
    const divd = d / 2;
    const quadD = Math.pow(divD, 2);
    const quadd = Math.pow(divd, 2);
    const soma = quadD + quadd;
    const calc = Math.pow(soma, 1.0 / 2);
    document.write(`O valor do lado é ${calc.toFixed(2)}.`)
}