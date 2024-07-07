//2. Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:
//A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//A mensagem "Reprovado", se a média for menor do que sete;
//A mensagem "Aprovado com Distinção", se a média for igual a dez.
const prompt = require('prompt-sync')({sigint: true});

let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let media = (nota1+nota2)/2;

if(media >= 7 && media < 10){
    console.log(`O aluno está APROVADO com a média: ${media}`) //media menor ou igual a 7 e menor que 10
} else if(media == 10){
    console.log(`O aluno está APROVADO COM DISTINÇÃO com a média: ${media}`) //media 10, aprovado com distinção
} else if(media < 7){
    console.log(`O aluno está REPROVADO com a média: ${media}`) //media menor que 7, reprovado
} else {
    console.log(`MÉDIA INVÁLIDA`) //diferente disso, media invalida
};