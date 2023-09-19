const dobro = function(n){
    return n*2
}

const res = dobro(4)
console.log(res)

//valor padrão para o parametro

const triplo = function(n = 5){
    return n*3
}
console.log(triplo())
console.log(triplo(10))

