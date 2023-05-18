let btn = document.getElementById("btn")
let resultado = document.getElementById("resultado")
let par = document.getElementById("par")
let impar = document.getElementById("impar")

let par_impar = []

function cadastrar() {
    let numero = parseInt(document.getElementById("number").value)

    par_impar.push(numero)
    console.log(par_impar)

    imprimir()
}

function imprimir() {
    resultado.innerHTML = ''
    par.innerHTML = ``
    impar.innerHTML = ``

    for (let i = 0; i < par_impar.length; i++) {
        resultado.innerHTML += `<p class="alert alert-primary"> ${par_impar[i]} </p>`
        if (par_impar[i] % 2 == 0) { par.innerHTML += `<p class="alert alert-danger"> ${par_impar[i]} </p>` }
        else { impar.innerHTML += `<p class="alert alert-success"> ${par_impar[i]} </p>` }
    }
}

btn.addEventListener("click", cadastrar)