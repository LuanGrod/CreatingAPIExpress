const express = require('express');
const cors = require('cors')
const seriesRoutes = require('./routes/series')

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded());

app.use('/api/v1/series', seriesRoutes)

app.listen(porta = 8000, () => { console.log(`Server rodando na porta ${porta}`) });