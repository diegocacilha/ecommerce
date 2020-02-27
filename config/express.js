'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');
const consign = require('consign');

app.use(bodyParser.json());//body-parser aceita o tipo JSON
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, function(){
    console.log(`server rodando na porta ${port}`);
});

module.exports = () => {
    consign({cwd:'api'})
        .include('rotas')
		.into(app);
    return app;
}

app.use(express.static('./client'));