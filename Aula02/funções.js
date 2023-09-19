function hello(){
    console.log('Oi')
}

hello()

//cuidado, aqui redefinimos a função sem parâmetros
function hello(nome){
    console.log('Hello, ' + nome)
}
hello('Murilo')

function soma(a,b){
    return a+b
}
const res = soma (2,6)
console.log(res)