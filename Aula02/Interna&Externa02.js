function ola(){
    let nome = 'Murilo'
    return function(){
        console.log(`Olá, ${nome}`)
    }
}

let olaRes = ola()
/* 
    Perceba que aqui a função olá já terminou
    É de se esperar que a variável nome já não 
    possa ser acessada
*/
olaRes()


//Também vale com parametros
function saudacoesFactory(saudacao, nome){
    return function(){
        console.log(saudacao + ', ' + nome)
    }
}

let olaNome = saudacoesFactory ('Olá', 'Murilo')
let tchauNome = saudacoesFactory('Tchau', 'Murilo')
olaNome()
tchauNome()
