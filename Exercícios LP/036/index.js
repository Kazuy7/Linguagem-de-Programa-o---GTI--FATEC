const valor = parseFloat(prompt("Digite o valor do produto:"));

if (valor <= 0) {
    document.write("Erro! Digite um valor maior que zero.")
} else {
    const desc = valor - (valor * 0.09);
    document.write(`O valor digitado com desconto de 9% fica R$${desc}.`)
}