let D = parseFloat(prompt("Digite um valor para a diagonal maior D:"));
let d = parseFloat(prompt("Digite um valor para a diagonal menor d:"));

if (D <= 0 || d <= 0) {
    document.write("Erro! Digite um valor maior que zero.")
} else {
    let calc = (D * d) / 2;
    document.write(`A área do losango é ${calc}.`)
}