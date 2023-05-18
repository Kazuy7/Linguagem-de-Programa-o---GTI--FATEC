let n = prompt("Digite um número:")
let nconvert = parseFloat(n)
let raiz2 = Math.pow(nconvert, 1/2)
let raiz3 = Math.pow(nconvert, 1/3)

document.write(`O número digitado foi ${n};<br>Sua raiz quadrada é ${raiz2};<br>E sua raiz cúbica é ${raiz3}.`)
