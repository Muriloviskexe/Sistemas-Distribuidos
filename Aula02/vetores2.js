const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristiana']

// Apenas nomes que começam com 'A'
const apenasComA = nomes.filter((n) => n.startsWith('A'))
console.log(apenasComA)

// Buscando as inicias de todos os nomes
const res = nomes.map((nome) => nome.charAt(0))
console.log(res)

// fericando se todos começam com a letra a
const todosComecamComA = nomes.every((n) => n.startsWith('A'))
console.log(todosComecamComA)

const valores = [1,2,3,4]
const soma = valores.reduce((ac,v) => ac+v)
console.log(soma)