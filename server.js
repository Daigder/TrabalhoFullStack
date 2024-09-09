const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const pessoaRoutes = require('./routes/pessoa-routes')

const app = express();

app.use(cors())
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/pessoas', pessoaRoutes)

app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`);
});