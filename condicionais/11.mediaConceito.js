// 11. Faça um script que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:

//       Média de Aproveitamento  Conceito
//       Entre 9.0 e 10.0                      A
//       Entre 7.5 e 9.0                        B
//       Entre 6.0 e 7.5                        C
//       Entre 4.0 e 6.0                        D
//       Entre 4.0 e zero                      E
//     O algoritmo deve mostrar numa janela de alert as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.


const prompt = require('prompt-sync')({sigint: true});

const n1 = parseFloat(prompt("Digite sua primeira nota: "));
const n2 = parseFloat(prompt("Digite sua segunda nota: "));
let mediaConceito = "";


const calcularMedia = (n1,n2) => {
    let mediaCalc = (n1+n2)/2     // calcula a média
    return mediaCalc;

}
let media = calcularMedia(n1,n2); // chamada da função calcularMedia, envia valores de n1 e n2 e armazena o return


const calcularConceito = (mediaConceito) => {

    if(media > 9 && media <= 10){
        mediaConceito = "A";
    }
    else if(media < 9 && media >=7.5){
        mediaConceito = "B";
    }
    else if(media < 7.5 && media >= 6){
        mediaConceito = "C";
    }
    else if(media < 6 && media >= 4){
        mediaConceito = "D";
    }
    else if(media < 4){
        mediaConceito = "E";
    } else {
        mediaConceito = "NOTA INVÁLIDA, TENTE NOVAMENTE COM OS DADOS CORRETOS"
    }

    return mediaConceito;
} // determina qual o conceito que o usuário irá receber

let conceito = calcularConceito(mediaConceito); // chamada de calcularConceito, irá enviar o valor vazio mediaConceito e armazenar o return

let situacao = conceito; // irá armazenar o valor da variável conceito

const checarSituacao = (situacao) => {
    if(situacao == "A" || situacao == "B" || situacao == "C"){
        situacao = "APROVADO"
    } else {
        situacao = "REPROVADO";
    }
    
    return situacao;
    
} // determinará se o usuário está aprovado ou reprovado

situacao = checarSituacao(situacao); //envia o valor de situacao e armazena o return
console.log(`MÉDIA: ${media} | CONCEITO: ${conceito} | RESULTADO: ${situacao}`);