let n1 = parseFloat(prompt("Digite um número inteiro:"))
let n2 = parseFloat(prompt("Digite outro número inteiro:"))

let soma = 0;

if (n1 <= n2) {
    while (n1 <= n2) {
        n1++;
        if (n1 % 2 == 0) {
            soma += n1;
        }
    }
    document.write(`A soma de todos os números entre o intervalo digitado é ${soma}.`)
} else if (n1 >= n2) {
    while (n1 >= n2) {
        if (n1 % 2 == 0) {
            soma += n1;
        }
        n1--;
    }
    document.write(`A soma de todos os números entre o intervalo digitado é ${soma}.`)
}