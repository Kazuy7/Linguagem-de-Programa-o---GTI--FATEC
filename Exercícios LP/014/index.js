let raio = prompt("Digite um valor para o raio:")
let raioc = parseFloat(raio)
let areac = Math.PI * (Math.pow(raioc, 2))
let perimetro = 2 * (Math.PI * raioc)

document.write(`A área da circunferência do valor digitado é ${areac.toFixed(2)} e o perímetro é ${perimetro.toFixed(2)}.`)