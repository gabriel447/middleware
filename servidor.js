const porta = 3003;

const express = require('express');
const app = express();

// app.use(req, res, next) usar para qualquer endpoint
app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45 });
});

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`);
});
