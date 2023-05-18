let num = document.getElementById("num");
let btn = document.getElementById("btn");
let div = document.getElementById("resultado");

function calcular() {
    let numc = parseFloat(num.value);

    if (numc < 0) {
        div.innerHTML = `Erro! Digite um valor maior que zero.`

    } else if (numc % 2 == 0) {
        let quad = Math.pow(numc, 2)
        let cubo = Math.pow(numc, 3)
        let set = Math.pow(numc, 7)

        div.innerHTML = `O número digitado foi ${numc}, elevado ao quadrado é ${quad}, ao cubo ${cubo} e a sétima ${set}.`;

    } else {
        let rquad = Math.pow(numc, 1.0 / 2)
        let rcubo = Math.pow(numc, 1.0 / 3)
        let rset = Math.pow(numc, 1.0 / 7)

        div.innerHTML = `O número digitado foi ${numc}, sua raiz quadrada é ${rquad.toFixed(2)}, cúbica é ${rcubo.toFixed(2)} e a sétima ${rset.toFixed(2)}.`
    }

}
btn.addEventListener("click", calcular)