let n1 = prompt("Digite o primeiro valor:")
let n2 = prompt("Digite o segundo valor:")
let n3 = prompt("Digite o terceiro valor:")
let n4 = prompt("Digite o quarto valor:")

let n1c = parseFloat(n1)
let n2c = parseFloat(n2)
let n3c = parseFloat(n3)
let n4c = parseFloat(n4)

let mp = ((n1*1)+(n2*2)+(n3*3)+(n4*4)) / (1+2+3+4)

document.write(`A média ponderada dos valores digitados é ${mp}.`)
