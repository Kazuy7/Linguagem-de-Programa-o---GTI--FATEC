const n1 = parseFloat(prompt("Digite o primeiro valor:"))
const n2 = parseFloat(prompt("Digite o segundo valor:"))

const soma = n1 + n2

if (soma > 10) {
    const raizc = Math.pow(soma, 1.0 / 3)
    document.write(`Os números digitados foram ${n1} e ${n2}.<br>A soma dos valores é ${soma} e a raiz cúbica é ${raizc.toFixed(2)}.`)
} else {
    document.write(`Os números digitados foram ${n1} e ${n2}.<br>A soma dos valores é ${soma}.`)
}