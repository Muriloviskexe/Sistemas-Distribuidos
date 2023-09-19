/*
    Algumas linguagens de programação possuem um mecanismo conhecido como coerção, do inglês cast. Quando dois primitivos de tipos diferentes
    estão envolvidos em uma expressão, um deles pode ter seu tipo alterado1 para que
    a expressão faça sentido. A coerção se refere a essa troca de tipo. Ela pode ocorrer
    de maneira explícita ou implícita 
*/

const n1 = 2
const n2 = '3'

// coerção implicita n1, concatenação acontece

const n3 = n1 + n2
console.log(n3)

// coerção explcita, soma acontece

const n4 = n1 + Number(n2)
console.log(n4)