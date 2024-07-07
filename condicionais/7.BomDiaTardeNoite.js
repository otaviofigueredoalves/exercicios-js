//7. Faça um script que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.
const prompt = require('prompt-sync')({sigint:true});

function periodoEstudo(){
    let periodo = prompt("Digite em qual período você estuda (M-MATUTINO, V-VESPERTINO, N-NOTURNO): ")
    periodo = periodo.toLowerCase() == "m" ? console.log("Bom dia!") : periodo.toLowerCase() == "v" ? console.log("Boa tarde!") : periodo.toLowerCase() == "n" ? console.log("Boa noite!") : console.log("Valor inválido!")
} //retorna uma string distinta dependendo do valor digitado

periodoEstudo()