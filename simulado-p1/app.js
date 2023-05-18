let galeria = document.getElementById("galeria")

function criarGaleria() {
  galeria.innerHTML = ""

  for (let i = 0; i < dados.length; i++) {
    galeria.innerHTML += `
        <div class="col-md-4 m-0 p-0">
          <div class="card m-2">
              <div class="row m-0">
                <div class="col-md-4 p-0 m-0">
                    <img src="${dados[i].url}" class="img-fluid rounded-start">
                </div>
                <div class="col-md-8 p-0">
                  <div class="card-body p-0 m-2">
                    <h5 class="card-title">${dados[i].titulo}</h5>
                    <p class="card-text">${dados[i].descricao}</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        `
  }
}
criarGaleria()