let salario = document.getElementById("salario");
let qw = document.getElementById("qw");
let btn = document.getElementById("btn");
let div = document.getElementById("resultado");



function calcular(){
    let salarioc = parseFloat(salario.value);
    let qwc = parseFloat(qw.value);
    let cemqw = parseFloat(salarioc) / 7;
    let vqw = parseFloat(cemqw) / 100;
    let vrqw = parseFloat(vqw) * parseFloat(qwc);
    let desc = (vrqw) - (parseFloat(vrqw) * 0.10);
    
    // console.log(cemqw)
    // console.log(vqw)
    // console.log(vrqw)
    // console.log(desc)
    div.innerHTML = `O valor em reais de cada quilowatts é R$${vqw},00.<br> O valor em reais a ser pago é R$${vrqw},00.<br> O novo valor com 10% de desconto é R$${desc},00.`
}
btn.addEventListener("click", calcular)


// let salario = prompt("Digite o salário:")
// let salario = prompt("Digite quanto gastou em quilowatts:")

// let cemqw = parseInt(salario) / 7;
// let vqw = parseInt(cemqw) / 100;
// let vrqw = parseInt(vqw) * parseInt(qw);
// let desc = parseInt(vrqw) - (parseInt(vrqw) * 0.10);

// document.write(`O valor em reais de casa quilowatts é ${vqw}.<br>`)
// document.write(`O valor em reais a ser pago é ${vrqw}.<br>`)
// document.write(`O novo valor com 10% de desconto é ${desc}.`)