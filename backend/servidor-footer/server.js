const express = require('express');
const bodyParser = require('body-parser');
const  cors = require('cors');

const app = express();
const PORT = 3000; 

app.use(cors());
app.use(bodyParser.json());

app.post('/contato', (req, res) => {
    console.log('Dados recebidos:', req.body)
    res.status(200).json({massage: 'Formulário enviado com sucesso!'});
});

app.listen(PORT, () => {
    console.log(`servidor rodando em  https://localhost:${PORT}`)
})