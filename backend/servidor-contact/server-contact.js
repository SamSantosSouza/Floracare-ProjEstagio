const express = require('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');

const app = express();
const PORT = 4000;

app.use(cors())
app.use(bodyParser.json())

app.post('/contato', (req, res) => {
    console.log('dados recebidos:', req.body);
    res.status(200).json({message: 'Resposta enviado com sucesso!'});
});

app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:${PORT}');
});