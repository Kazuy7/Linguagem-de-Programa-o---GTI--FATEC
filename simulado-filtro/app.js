
let galeria = document.getElementById('galeria')
let btn01 = document.getElementById('filtrar')
let btn02 = document.getElementById('recarregar')


function criarGaleria() {
    
    // console.log(dados);
    console.log('oi');
    galeria.innerHTML = ``
    let select =document.getElementById('opt').value

    for (let i = 0; i < dados.length; i++) {

        if(select == ''){
            galeria.innerHTML += `
                <p class="alert alert-danger">
                    Selecione um projeto válido!!!
                </p>
            `
            break
        }


        if(dados[i].projeto == select){

        galeria.innerHTML += `
        <div class="col-lg-4 col-md-4 col-6  ">
        <div class="card mb-3 card">
            <div class="row g-1">
                            <div class="col-md-4">
                                <img src="${dados[i].url}" class="img-fluid m-0 p-0" alt="...">
                            </div>
                <div class="col-md-8 ">
                    <div class="card-body m-0 p-0">
                            <h5 class="card-title">${dados[i].titulo.toUpperCase()}</h5>
                            <p class="card-text">${dados[i].descricao}</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        `
        }
    }

}
function criarGaleriafiltro() {
    console.log(dados);
    galeria.innerHTML = ``


    for (let i = 0; i < dados.length; i++) {
        

        galeria.innerHTML += `
        <div class="col-lg-4 col-md-4 col-6  ">
        <div class="card mb-3 card">
            <div class="row g-1">
                            <div class="col-md-4">
                                <img src="${dados[i].url}" class="img-fluid m-0 p-0" alt="...">
                            </div>
                <div class="col-md-8 ">
                    <div class="card-body m-0 p-0">
                            <h5 class="card-title">${dados[i].titulo.toUpperCase()}</h5>
                            <p class="card-text">${dados[i].descricao}</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        `
        
    }

}
criarGaleriafiltro()

btn01.addEventListener('click',criarGaleria);
btn02.addEventListener('click',criarGaleriafiltro)
// btn01.addEventListener('clik',criarGaleriafiltro);
// btn02.addEventListener('clik',criarGaleria)

