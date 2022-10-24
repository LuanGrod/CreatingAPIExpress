const input = document.getElementById('id')
const buscaPorId = document.getElementById('buscaPorId')
const lista = document.getElementById('lista')

buscaPorId.addEventListener('click', () => {
  let id = input.value

  fetch(`http://localhost:8000/api/v1/series/${id}`)
    .then(response => response.json())
    .then(json => imprimeItem(json))
    .catch(lista.innerHTML = "404 Not Found")
})

function imprimeItem(json) {
  //limpa lista
  lista.innerHTML = ""
  //cria titulo
  let h1 = document.createElement('h1')
  let text = document.createTextNode(json.title)
  h1.appendChild(text)
  //cria imagem
  let img = document.createElement('img');
  img.src = json.image
  img.alt = json.title
  //adiciona o item na lista
  lista.appendChild(h1)
  lista.appendChild(img)
}

