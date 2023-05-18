let n1 = document.getElementById("n1")
let n2 = document.getElementById("n2")
let n3 = document.getElementById("n3")
let btn = document.getElementById("btn")
let div = document.getElementById("app")

function calcular () {
    let calc = (parseFloat(n1.value) + parseFloat(n2.value) + parseFloat(n3.value)) / 3
    
    if (calc >= 7.5) {
        div.innerHTML = `A nota final é ${calc} e o aluno está aprovado!!!`
    } else {
        div.innerHTML = `A nota final é ${calc} e o aluno está reprovado!!!`
    }
}
btn.addEventListener("click", calcular)