//cria uma constante 'express' que faz a requisão do serviço instalado
const express = require('express');
//cria a constante 'app' que executa o 'express'
const app = express();
//faz uma requisição do tipo 'use' que transforma express em json
app.use(express.json());

//cria uma constante 'lembretes' que é uma array vazia 
const lembretes = {}
contador = 0
 
//faz um requisição 'get' para 'lembretes', uma function que tem com param 'req' e 'res'
//ao executar a function (fazer o get) ele responde com os lembretes, no caso a array vazia por enquanto
app.get('/lembretes', (req, res) => {
res.send(lembretes)
})


//fazer uma req do tipo 'post' para o lembretes, que tem como param 'req' e 'res', fazendo a requisição ele soma um numero no contator e cria uma constante que que faz a req do body (para inserir os lembretes novos), para o lembrete de cada numero do contator ele imprime o contador e o texto inserido
app.post('/lembretes', (req, res) => {
    contador ++
    
    const { texto } = req.body
    lembretes[contador] = {
        contador, texto
    }

//a resposta da req é um status 201 (sucess) e envia o lembrete com o contator proprio
    res.status(201).send(lembretes[contador])
})

//faz um req de listen que vai ficar escutando a porta 4000 para qualquer comunicação nela
app.listen(4000, () => {
console.log('Lembretes. Porta 4000')
})