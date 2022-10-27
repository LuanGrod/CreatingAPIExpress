//get
const getID = document.getElementById('getID')
const getBtnBuscaID = document.getElementById('buscaPorId')
const getPoster = document.getElementById('getPoster')

getBtnBuscaID.addEventListener('click', () => {
  getSerie(getID.value)
})

async function getSerie(id) {
  await fetch(`http://localhost:8000/api/v1/series/${id}`)
          .then(response => response.json())
          .then(json => imprimeItem(json))
          .catch(err => getPoster.innerHTML = "Erro: " + err)
}

function imprimeItem(json) {
  //limpa lista
  getPoster.innerHTML = ""
  //cria titulo
  let h1 = document.createElement('h1')
  let text = document.createTextNode(json.title)
  h1.appendChild(text)
  //cria imagem
  let img = document.createElement('img');
  img.src = json.image
  img.alt = json.title
  //adiciona o item na lista
  getPoster.appendChild(h1)
  getPoster.appendChild(img)
}

//post
const postID = document.getElementById('postID')
const postTitulo = document.getElementById('postTitulo')
const postURL = document.getElementById('postURL')
const postPublicarSerie = document.getElementById('publicarSerie')
const postResposta = document.getElementById('postResposta')

postPublicarSerie.addEventListener('click', () => {
  let Vid = postID.value
  let Vtitulo = postTitulo.value
  let Vurl = postURL.value

  const json = {
    "id": Vid,
    "title": Vtitulo,
    "image": Vurl
  }

  postSerie(json)
  .then( (resp) => postResposta.innerText= "Série adicionada" )
  .catch( (err) => postResposta.innerText= "Ops.. Ocorreu um erro")
})

async function postSerie(json) {
  const response = await fetch("http://localhost:8000/api/v1/series/", {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(json)
  });
  return response.status;
}
