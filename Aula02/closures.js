/*
    Para entender o que é um closure, é importante estudar entender
    alguns conceitos. Primeiro, em Javascript, funcões são cidadãs de primeira
    classe. Informalmente, um cidadão de primeira classe em uma linguagem de
    programação é uma entidade que oferece suporte a operações como as seguintes.

    ° Ser passada como argumento para uma função.
    ° Ser devolvida por uma função.
    ° Ser atribuída a uma variável.

    O Bloco de Código 1.7.1 mostra como funções em Javascript podem estar
    envolvidas em todas as operações mencionadas. Há também o conceito de função
    de alta ordem. Uma função de alta ordem é aquela que recebe pelo menos
    uma função como parâmetro e/ou devolve uma função quando seu processamento
    termina.
*/



// uma função pode ser atribuida a uma variável
let umaFuncao = function(){
    console.log('Fui armazena em uma variavel')
}
// e é chamada assim
umaFuncao()


// F recebe uma função como parametro else, por isso é uma função em alta ordem

function f (hello){
    // chamando a função note que a tipagem dinamica tem um preço
    hello()
}
function g(){
    function outraFuncao(){
        console.log('Fui Criada por g')
    }
    return outraFuncao
}

// f pode ser chamada assim
f (function(){
    console.log('Estou sendo passada para f')
})

// e g pode ser chamada assim
gResult = g()
gResult()

// ou assim
g() ()

//outros testes
//f chama g, que somente devolve a função, mas não a resolução da função dentro dela
f(g)
//ou
f(g())


