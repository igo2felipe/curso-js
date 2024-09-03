let listaDeAlunos = ["João", "Maria", "Alberto", "Carlos", "Ana",]
let alunoNovo = "Antonio"

if(listaDeAlunos.length < 10){
    listaDeAlunos.push(alunoNovo);
    console.log("Conseguiu adicionar o aluno")
}else {
    console.log("Atingiu o numero maximo de alunos")
}