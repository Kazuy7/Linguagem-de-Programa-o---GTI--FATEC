const n1 = parseFloat(prompt("Digite o primeiro valor:"))
const n2 = parseFloat(prompt("Digite o segundo valor:"))
const n3 = parseFloat(prompt("Digite o terceiro valor:"))

if (n1 < 0) {
    document.write (`O valor ${n1} é negativo.<br>`)
} else if (n1 === 0) {
    document.write (`O valor ${n1} é nulo.<br>`)
} else if (n1 > 0) {
    document.write (`O valor ${n1} é positivo.<br>`)
}

if (n2 < 0) {
    document.write (`O valor ${n2} é negativo.<br>`)
} else if (n2 === 0) {
    document.write (`O valor ${n2} é nulo.<br>`)
} else if (n2 > 0) {
    document.write (`O valor ${n2} é positivo.<br>`)
}

if (n3 < 0) {
    document.write (`O valor ${n3} é negativo.<br>`)
} else if (n3 === 0) {
    document.write (`O valor ${n3} é nulo.<br>`)
} else if (n3 > 0) {
    document.write (`O valor ${n3} é positivo.<br>`)
}

if (n1 > n2 && n1 > n3 ) {
    document.write (`O maior valor é ${n1}.<br>`)
} else if (n2 > n1 && n2 > n3) {
    document.write (`O maior valor é ${n2}.<br>`)
} else if (n3 > n1 && n3 > n2) {
    document.write (`O maior valor é ${n3}.<br>`)
}