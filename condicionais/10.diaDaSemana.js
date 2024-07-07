// 10. Faça um script que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.
const prompt = require('prompt-sync')({sigint: true});

function diaDaSemana (){
    let dia = parseInt(prompt("Qual sua semana favorita? [1]Seg, [2]Ter, [3]Qua, [4]Qui, [5]Sex, [6]Sáb. [7]Dom --> "))
    switch(dia){
        case 1:
            console.log("Hoje é segunda-feira!");
            break;
        case 2:
            console.log("Hoje é terça-feira!");
            break;
        case 3:
            console.log("Hoje é quarta-feira!");
            break;
        case 4:
            console.log("Hoje é quinta-feira!");
            break;
        case 5:
            console.log("Hoje é sexta-feira!");
            break;
        case 6:
            console.log("Hoje é sábado!");
            break;
        case 7:
            console.log("Hoje é domingo!")
            break;
        default:
            console.log("Valor inválido!")

    }
} // retorna um console.log distinto dependendo do dígito (limitado de 1 à 7)

diaDaSemana(); //chamada da função diaDaSemana, executando-a