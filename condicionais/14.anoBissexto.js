//14. Faça um script que peça um número correspondente a um determinado ano e em seguida informe se este ano é ou não bissexto.
const prompt = require('prompt-sync')({sigint: true});
const ano = parseInt(prompt("Digite o ano a ser verificado: "))
const verificarBissexto = (anoCheck) => {
    let bissextoValidate = "";
    if(ano % 4 == 0){ //se o resto for 0, execute
        bissextoValidate = `${anoCheck} é um ano BISSEXTO!`
    } 
    else if(ano % 4 != 0){ //se o resto for diferente de 0, execute
        bissextoValidate = `${anoCheck} é um ano NÃO-BISSEXTO!`
    }
    else {
        bissextoValidate = "VALOR INVÁLIDO"
    }
    return bissextoValidate;
};

const bissexto = verificarBissexto(ano);
console.log(bissexto)