let base = prompt("Digite um valor para a base:")
let altura = prompt("Digite um valor para a altura:")
let area = parseInt(base) * parseInt(altura)
let perimetro = (parseInt(base) * 2) + (parseInt(altura) * 2)

document.write(`O área é ${area} e o perímetro é ${perimetro}.`)