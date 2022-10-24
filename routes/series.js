const { Router } = require('express')
const router = Router()

const database = [
  { id: 1, title: 'cyberpunk', image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/7jSWOc6jWSw5hZ78HB8Hw3pJxuk.jpg' },
  { id: 2, title: 'modern family', image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/fu5vEUHgxkAPmX26ISQXqHmlPMq.jpg' },
  { id: 3, title: 'house of the dragon', image: 'https://www.themoviedb.org/t/p/w220_and_h330_face/z2yahl2uefxDCl0nogcRBstwruJ.jpg' },
]

router.get('/', (req, res) => {
  res.status(200).send(database)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const serie = database.find((item) => item.id == id)
  res.send(serie)
})

router.post('/', (req, res) => {
  console.log(req.body)
  database.push(req.body)
  res.send(201)
})

module.exports = router;