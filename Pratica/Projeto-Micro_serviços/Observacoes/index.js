//* cria uma constante 'express' que faz a requisão do serviço instalado
const express = require('express');

//* cria a constante 'app' que executa o 'express'
const app = express();

//* faz uma requisição do tipo 'use' que transforma express em json
app.use(express.json());

const observacoesPorLembreteId = {};
const { v4: uuidv4 } = require('uuid');

//* :id é um placeholder
//* exemplo: /lembretes/123456/observacoes
app.post('/lembretes/id/observacoes', (req, res) => {
    const idObs = uuidv4();
    const { texto } = req.body;
    //req.params dá acesso à lista de parâmetros da URL
    const observacoesDoLembrete =
    observacoesPorLembreteId[req.params.id] || [];
    observacoesDoLembrete.push({ id: idObs, texto });
    observacoesPorLembreteId[req.params.id] =
    observacoesDoLembrete;
    
 res.status(201).send(observacoesDoLembrete);
})

//* faz a req de get para puxar as observações
app.get('/lembretes/id/observacoes', (req, res) => {
    res.send(observacoes)
})


app.listen(5000, () => {
    console.log('Lembretes. Porta 5000')
})