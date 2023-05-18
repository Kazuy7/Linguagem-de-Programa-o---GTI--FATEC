let base = prompt("Dê um valor para a base:")
let altura = prompt("Dê um valor para a altura:")
let basec = parseFloat(base)
let alturac = parseFloat(altura)

let vp = (basec * alturac)/ 2;

document.write(`O volume do prisma de base triangular é ${vp}.`)