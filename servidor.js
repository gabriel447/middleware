const porta = 3003;

const express = require('express')
const app = express()
const bd = require('./bd.js')

// app.use(req, res, next) usar para qualquer endpoint
app.get('/produtos', (req, res, next) => {
    res.send(bd.getProdutos());
});

app.get('/produtos/:id', (req, res, next) => {
    res.send(bd.getProduto(req.params.id));
});

app.post('/produtos', (req, res, next) => {
    const produto = bd.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
});

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`);
});
