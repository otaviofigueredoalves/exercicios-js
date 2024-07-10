//15. Faça um script que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.
const prompt = require('prompt-sync')({sigint: true});

const dia = Number(prompt("Digite o dia: "))
const mes = Number(prompt("Digite o mês: "))
const ano = Number(prompt("Digite o ano: "))

const validarData = () =>{
    let validacao = "";
    if(dia > 0 && dia <= 32 && mes > 0 && mes <= 12 && ano % 1 == 0 ) { //dia maior que 0 e menor que 32, mes maior que 0 e menor que 12, ano dividido por 1 e resto 0
        validacao = `${dia}/${mes}/${ano} é uma data válida`
    } else {
        validacao = "DATA INVÁLIDA!"
    }

    return validacao;
}

const data = validarData();

console.log(data)