let nota01 = document.getElementById("nota01")
let nota02 = document.getElementById("nota02")
let nota03 = document.getElementById("nota03")
let nota04 = document.getElementById("nota04")
let btn = document.getElementById("btn")
let div = document.getElementById("app")


function calcular() {
    console.log(nota01)
    console.log(nota02)
    console.log(nota03)
    console.log(nota04)
    console.log(btn)
    console.log(app)

    let calc = ((parseFloat(nota01.value)*3) + (parseFloat(nota02.value)*5) + (parseFloat(nota03.value)*6) + (parseFloat(nota04.value)*6)) / (3+5+6+6)
    
    div.innerHTML = `A média ponderada é ${calc}.`

    if (calc >= 6) {    
        div.innerHTML = `A média ponderada é ${calc} e o aluno está APROVADO!`
    } else{
        div.innerHTML = `A média ponderada é ${calc} e o aluno está REPROVADO!`
    }
}
btn.addEventListener("click", calcular)