let n1 = prompt("Digite o primeiro valor:")
let n2 = prompt("Digite o segundo valor:")

let soma = parseInt(n1) + parseInt(n2)
let sub = parseInt(n1) - parseInt(n2)
let mult = parseInt(n1) * parseInt(n2)
let div = parseInt(n1) / parseInt(n2)
let med = parseInt(soma) / 2

document.write(`Os números digitados foram ${n1} e ${n2}.<br>`);
document.write(`A soma desses números é ${soma}.<br>`);
document.write(`A subtração desses números é ${sub}.<br>`);
document.write(`A multiplicação desses números é ${mult}.<br>`);
document.write(`A divisão desses números é ${div}.<br>`);
document.write(`A média desses números é ${med}.<br>`);
