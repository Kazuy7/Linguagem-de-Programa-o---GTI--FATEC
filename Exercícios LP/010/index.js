let n = prompt("Digite um número para que seja encontrada sua raiz quadrada:")
let nconvert = parseFloat(n)
let raiz = Math.pow(nconvert, 1/2)

document.write(`A raiz quadrada do número ${n} é ${raiz}.`)