let n = prompt("Digite um número:")
let nconvert = parseFloat(n)
let e2 = Math.pow(nconvert, 2)
let e3 = Math.pow(nconvert, 3)
let e4 = Math.pow(nconvert, 4)
let e5 = Math.pow(nconvert, 5)

document.write(`O número digitado foi ${n}, seu valor elevado a 2 é ${e2}, seu valor elevado a 3 é ${e3}, seu valor elevado a 4 é ${e4}, seu valor elevado a 5 é ${e5}.`)