
let v1 = document.getElementById("n1");
let v2 = document.getElementById("n2");
let btn = document.getElementById("botão");
let div = document.getElementById("info")

function escreve(){
    console.log(parseInt(v1.value))
    console.log(parseInt(v2.value))
    console.log(parseInt((v1.value)+1))
    console.log(parseInt((v2.value)-1))

    div.innerHTML = `O primeiro valor digitado foi ${v1}, o segundo foi ${v2}, somando 1 no primeiro valor fica ${parseInt(v1) + 1} e subtraindo 1 do segundo valor fica ${parseInt(v2.value) - 1}.`
}
btn.addEventListener("click", escreve)
