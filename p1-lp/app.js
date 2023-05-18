let galeria = document.getElementById("galeria")

function criarGaleria() {
  galeria.innerHTML = ""

  for (let i = 0; i < bdCardA.length; i++) {
    galeria.innerHTML += `
        <div class="col-md-4 m-0 p-0">
          <div class="card m-2">
              <div class="row m-0">
                <div class="col-md-4 p-0 m-0">
                    <img src="${bdCardA[i].urlCardH}" class="img-fluid rounded-start">
                </div>
                <div class="col-md-8 p-0">
                  <div class="card-body">
                    <h5 class="card-title">${bdCardA[i].denominacao}</h5>
                    <p class="card-text">${bdCardA[i].descricaoCardH}</p>
                    <p class="card-text">Lucas Silva</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        `
  }
}
criarGaleria()

// -------------

let galeria2 = document.getElementById("galeria2")

function criarGaleria2() {
    galeria2.innerHTML = ""

    for (let i = 0; i < bdCardB.length; i++) {
        galeria2.innerHTML += `
        <div class="col-lg-3 col-md-6 col-12 mb-3">
                <div class="card text-dark pb-3 w-100 h-100">
                    <img class="" src="${bdCardB[i].urlCardV}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${bdCardB[i].denominacaoProjeto}</h5>
                      <p class="card-text">${bdCardB[i].descricaoCardV}</p>
                      <a href="#" class="btn btn-primary">Lucas</a>
                    </div>
                  </div>
            </div>
        `
    }
}
criarGaleria2()