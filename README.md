# Criando um Servidor Web com Node.js + Express.js
[![status](https://img.shields.io/badge/status-completo-green)](https://github.com/LuanGrod/)
[![licence](https://img.shields.io/badge/licença-MIT-red)](https://github.com/LuanGrod/CreatingAPIExpress/blob/main/LICENSE)

# Sobre o projeto

O intuito deste projeto foi de criar um servidor com rotas que permitam a requisição por métodos GET/POST, que consultam uma 
API interna e retornam objetos que alteram o DOM da página dinâmicamente.

# Antes de Começar

Para ter controle controle total sobre este projeto, é necessário ter o NodeJs + NPM instalados , criar o projeto e instalar as seguintes dependências:

## Express

~~~node
$ npm install express
~~~

## Cors

~~~node
$ npm install cors
~~~

# Layout da aplicação
### Tela Principal
![Main](https://github.com/LuanGrod/CreatingAPIExpress/blob/main/assets/image.JPG)


## Banco de dados

Foi criado um arquivo JSON que simula um bando de dados, de onde serão retirados os dados da consulta.

~~~javascript
const database = [
  { 
    id: 1, 
    title: 'Cyberpunk Edgerunners', 
    image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/7jSWOc6jWSw5hZ78HB8Hw3pJxuk.jpg' },
  { 
    id: 2, 
    title: 'Modern Family', 
    image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/fu5vEUHgxkAPmX26ISQXqHmlPMq.jpg' },
  { 
    id: 3, 
    title: 'House of the Dragon', 
    image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/z2yahl2uefxDCl0nogcRBstwruJ.jpg' },
]
~~~

# Ferramentas e Tecnologias
### Front-end
- HTML
- CSS

### Back-end
- Javascript
- Node.js
- NPM

### APIs
- Fetch

# Autores

Luan Guilherme Rodrigues - https://www.linkedin.com/in/luan-grod/
