let numero = prompt("Digite um valor qualquer")
if (numero < 0) {
    document.write("Erro! Digite um valor maior que zero.")    
} else if (numero % 2 == 0) {
    document.write("O número digitado é PAR!")
} else if (numero % 2 != 0) {
    document.write("O número digitado é ÍMPAR!")
}