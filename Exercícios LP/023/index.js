let n = document.getElementById("n")
let btn = document.getElementById("btn")
let div = document.getElementById("app")

function calcular () {
    let nc = parseFloat(n.value)
    if (nc % 2 == 0) {
        let par = Math.pow(nc, 2)
        div.innerHTML = `O número digitado foi ${nc} e elevado ao quadrado fica ${par}.`
    } else {
        let impar = Math.pow(nc, 3)
        div.innerHTML = `O número digitado foi ${nc} e elevado ao cubo fica ${impar}.`
    }
}
btn.addEventListener("click", calcular)
