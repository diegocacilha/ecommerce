'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
    console.log('Entrou aqui');
    next();
});

app.use(express.static('./client'));

app.listen(port, function(){
    console.log(`server rodando na porta ${port}`);
});

module.exports = () => app;