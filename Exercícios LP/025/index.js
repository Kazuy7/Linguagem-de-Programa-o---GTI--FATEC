const base = prompt("Digite um valor para a base:")
const altura = prompt("Digite um valor para a altura:")

const area = (base*altura)/2
const hip = Math.pow(Math.pow(base,2)+Math.pow(altura,2), 1/2.0)

document.write(`A area é ${area} e a hipotenusa é ${hip.toFixed(2)}.`)