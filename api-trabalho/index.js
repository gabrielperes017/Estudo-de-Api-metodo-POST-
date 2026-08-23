const express = require('express');
const app = express();
const pessoaRouter = require('./pessoa/pessoa.router');

app.use(express.json());
app.use('/pessoa', pessoaRouter);


app.listen(3000, () => console.log('Servidor rodando na porta 3000 http://localhost:3000'));
