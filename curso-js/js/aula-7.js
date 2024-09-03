let podeDirigir = true
let stringtrue = "true" 

console.log("O tipo da variavel podeDirigir é: " + typeof podeDirigir)
console.log("O tipo da variavel stringTrug é: " + typeof stringtrue)

// console.log("O tipo da variavel podeDirigir é: " + typeof stringtrue)

let nome1 = "João"
let nome2 = "João"

// console.log(nome1 == nome2)

let ehIgual = (nome1 == nome2)

// console.log(ehIgual)

let numeroA = 20
let numeroB = 15
let comparação = (numeroA == numeroB)

// console.log("Os numero são iguais? " + comparação)

let comparaçãoDois = (15 < 100)

// console.log("Quinze é menor do que cem? " + comparaçãoDois)

let lista = ["elemento A", "elemento B"]

let inclui = lista.includes("elemento B")
console.log(inclui)

let nota1 = 90
let nota2 = 70
let nota3 = 70
let nota4 = 100 

// Condição 1 E Condição 2 são verdadeiras 
let passouDeAno = (nota1 > 60 && nota2 > 60 && nota3 > 60 && nota4 > 60)

// console.log("O aluno passou de ano? " + passouDeAno)

let nome = "João"
let sobrenome = "Silva"

let ehJoãoCarlos = (nome == "João" && sobrenome == "Carlos")

// console.log("Esse nome é João Carlos? -> " + ehJoãoCarlos)

// --------------------------------------------------------------------------------------------------------------------------------------------------------------
let passouNoEnem = false
let passouNoVestibularProprio = false
let ehtransferencia = true 

// ||
let entrouNaFaculdade = (passouNoEnem == true || passouNoVestibularProprio == true || ehtransferencia == true)

// console.log("Entrou na faculdade? " + entrouNaFaculdade)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------

// !

// true 
let passouEmMatematica = true

// false
passouEmMatematica = !passouEmMatematica

// true 
passouEmMatematica = !passouEmMatematica

console.log(passouEmMatematica)