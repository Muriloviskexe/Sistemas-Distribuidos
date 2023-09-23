
//fs carrega uma biblioteca de leitura de arquivos
const fs = require("fs");

const abrirArquivo = function (nomeArquivo) {
const exibirConteudo = function (erro, conteudo) {
if (erro) {
console.log(`Deu erro: ${erro}`);
} else {
    //Imprime o conteudo transferindo para modelo de string
console.log(conteudo.toString());

        //Criando uma const chamada dobro que le o 'conteudo' que dobra o numero de aquivos
        const dobro = +conteudo.toString() * 2;
        const finalizar = function (erro){
        if(erro){
        console.log('Deu erro tentando salvar o dobro')
        }
        else{
        console.log("Salvou o dobro com sucesso");
        }
 }

 //Chama a função 'fs' e escreve um arquivo e ler como string  e por fim exec a função finalizar
 fs.writeFile('dobro.txt', dobro.toString(), finalizar);
 }
 };

 fs.readFile(nomeArquivo, exibirConteudo);
 };

 abrirArquivo("arquivo.txt")