const salario = parseFloat(prompt("Digite o valor do salário:"))
const aumento = salario + (salario * 0.25)

document.write(`O novo salário digitado foi ${salario} com 25% de aumento ficou R$${aumento.toFixed(2)}.`)