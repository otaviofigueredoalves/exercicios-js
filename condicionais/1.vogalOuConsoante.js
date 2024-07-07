//1. PEÇA AO USUÁRIO PARA DIGITAR UMA LETRA DO ALFABETO E INFORME SE É VOGAL OU CONSOANTE.
const prompt = require('prompt-sync')({sigint: true});

let letter = prompt("Digite uma letra do alfabeto: ");

if(letter.toLowerCase() == "a" ||letter.toLowerCase() == "e" ||letter.toLowerCase() == "i" ||letter.toLowerCase() == "o" ||letter.toLowerCase() == "u"){
    console.log(`A letra ${letter} é uma VOGAL`)
} else if(letter.toLowerCase() == "b" ||letter.toLowerCase() == "c" ||letter.toLowerCase() == "d" ||letter.toLowerCase() == "f" ||letter.toLowerCase() == "g" ||letter.toLowerCase() == "h" ||letter.toLowerCase() == "j" ||letter.toLowerCase() == "k" ||letter.toLowerCase() == "l" ||letter.toLowerCase() == "m" ||letter.toLowerCase() == "n" ||letter.toLowerCase() == "p" ||letter.toLowerCase() == "q" ||letter.toLowerCase() == "r" ||letter.toLowerCase() == "s" ||letter.toLowerCase() == "t" ||letter.toLowerCase() == "v" ||letter.toLowerCase() == "w" ||letter.toLowerCase() == "x" ||letter.toLowerCase() == "z"){
    //O usuário insere um valor, esse valor é transformado em caixa baixa (minusculo) e é verificado pela condicional. Se a verificação for verdadeira, a variável letter retornará um console.log de acordo com a verificação.
    console.log(`A letra ${letter} é uma CONSOANTE`)
} else {
    console.log(`${letter} É UM VALOR INVÁLIDO!`)
}