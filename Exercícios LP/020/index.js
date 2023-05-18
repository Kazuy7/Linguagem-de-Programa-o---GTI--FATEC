let raio = prompt("Digite o valor do raio para calcular o volume e a área da esfera:")
let raioc = parseFloat(raio)

let area = 4 * Math.PI * Math.pow(raio, 2)
let volume = (4 * Math.PI * Math.pow(raio, 3))/ 3

document.write(`O volume da esfera é ${volume} e a area ${area}`)