let nome = document.getElementById('nome');
let btn = document.getElementById('btn');
let div = document.getElementById('resultado')

//Array
let arrayNomes = []

function cadastrar() {
    arrayNomes.push(nome.value)
    console.log(arrayNomes);
    imprimir()
}
function imprimir() {
    div.innerHTML = ''
    for(let i = 0; i < arrayNomes.length; i++){
        div.innerHTML += `<p class="alert alert-success">${arrayNomes[i]}</p>`
    }
}
btn.addEventListener('click', cadastrar)