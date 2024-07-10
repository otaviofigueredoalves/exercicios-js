//16. Faça um script que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.
const prompt = require('prompt-sync')({sigint: true});

const num = Number(prompt("Digite o numero que deseja verificar: "));

const verificarParImpar = () =>{
    if(num % 2 == 0){ //se divisão de num por 2 tiver resto 0, é par
        validate = "Par"
    } else {
        validate = "Ímpar"
    }

    return validate
}

const verificacao = verificarParImpar();

console.log(`O número ${num} é ${verificacao}`)