let galeria = document.getElementById("galeria")
let btn01 = document.getElementById("filtrar")
let btn02 = document.getElementById("rf")

function criarGaleria() {
  galeria.innerHTML = ""

  for (let i = 0; i < dados.length; i++) {
    galeria.innerHTML += `
    <div class="col-lg-3 col-md-6 col-12 p-3">
            <div class="card text-dark pb-3 w-100 h-100">
                <img class="" src="${dados[i].url}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${dados[i].titulo}</h5>
                  <p class="card-text">${dados[i].descricao}</p>
                </div>
              </div>
        </div>
    `
  }
}
function GaleriaFiltrar() {
  galeria.innerHTML = ""
  let opt = document.getElementById("opt").value

  for (let i = 0; i < dados.length; i++) {
    if(dados[i].projeto == opt){
    galeria.innerHTML += `
    <div class="col-lg-3 col-md-6 col-12 mb-3">
            <div class="card text-dark pb-3 w-100 h-100">
                <img class="" src="${dados[i].url}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${dados[i].titulo}</h5>
                  <p class="card-text">${dados[i].descricao}</p>
                </div>
              </div>
        </div>
    `
    }
  }
}
criarGaleria()


btn01.addEventListener('click',GaleriaFiltrar)
btn02.addEventListener('click',criarGaleria)


// function enviarEmail() {
//   const nome = document.getElementById('nome').value;
//   const dataNascimento = document.getElementById('data-nascimento').value;
//   const email = document.getElementById('email').value;
//   const mensagem = document.getElementById('mensagem').value;

//   Email.send({
//     // SecureToken: "smtp.gmail.com",
//     To: "lucas.goliveirass@gmail.com",
//     From: email,
//     Subject: "Contato através do formulário",
//     Body: "Nome: " + nome + "<br>"
//           + "Data de Nascimento: " + dataNascimento + "<br>"
//           + "E-mail: " + email + "<br>"
//           + "Mensagem: " + mensagem
//   }).then(function(message) {
//     alert("Mensagem enviada com sucesso!");
//   });
// }

