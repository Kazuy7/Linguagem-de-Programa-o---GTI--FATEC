let bme = prompt("Digite um valor para a base menor:")
let bma = prompt("Digite um valor para a base maior:")
let altura = prompt("Digite um valor para a altura:")

let bmec = parseFloat(bme)
let bmac = parseFloat(bma)
let alturac = parseFloat(altura)

let area = (((bmec+bmac)*alturac) / 2);

document.write(`A área do trapézio é ${area}`)
