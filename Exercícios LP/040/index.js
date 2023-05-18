let numero = 0; 
let soma = 0;

while (numero <= 100) {
    soma += numero;
    numero++;
}
document.write(`A soma de todos os números entre 0 e 100 é ${soma}`);
console.log(soma);

// Não podemos usar o *const* em uma variável que será alterada.