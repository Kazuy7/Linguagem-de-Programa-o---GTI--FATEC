let numero01 = document.getElementById("n1")
let numero02 = document.getElementById("n2")
let btn = document.getElementById("botão")
let div = document.getElementById("valorSoma")

function escreve(){
    console.log(numero01)
    console.log(numero02)
    console.log(parseInt(numero01.value) + parseInt(numero02.value))
    //console.log(numero01.value + numero02.value)
    //div.innerText = `<p> ${numero01.value} | ${numero02.value}</p>`
    //div.innerHTML = `<p> ${numero01.value} | ${numero02.value}</p>`
    div.innerHTML = `<p> ${parseInt(numero01.value) + parseInt(numero02.value)}</p>`
}
btn.addEventListener("click", escreve)
