function avaliarAluno(porcentagemDePresenca, notaA, NotaB){
    let media = (notaA + NotaB)/2
    if(media > 6 && porcentagemDePresenca > 75){
    }else {
        return "Reprovou"
    }
}

console.log(avaliarAluno(100, 0, 0))