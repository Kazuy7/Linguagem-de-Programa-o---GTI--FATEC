let raiomaior = prompt("Digite o valor do raio MAIOR:")
let raiomenor = prompt("Digite o valor do raio MENOR:")

let raiomaiorc = parseFloat(raiomaior)
let raiomenorc = parseFloat(raiomenor)

let acmaior = Math.PI * (Math.pow(raiomaiorc, 2))
let acmenor = Math.PI * (Math.pow(raiomenorc, 2))

let area = acmaior - acmenor

document.write(`A área da coroa de forma circular é ${area.toFixed(2)}.`)

