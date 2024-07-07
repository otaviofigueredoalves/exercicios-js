// 8. As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver um script que calculará os reajustes.

// Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

//     salários até R$ 280,00 (incluindo) : aumento de 20%
//     salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
//     salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
//     salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
//     o salário antes do reajuste;
//     o percentual de aumento aplicado;
//     o valor do aumento;
//     o novo salário, após o aumento.
const prompt = require('prompt-sync')({sigint:true});

function reajusteSalarial(){
    let nomeColaborador = prompt("Digite seu nome: ");
    let salarioColaborador = parseFloat(prompt("Digite seu salário atual: "));
    let salarioAnterior = salarioColaborador;
    let percentual = "" //será determinado pelo programa
    let valorAumento = 0;//será determinado pelo programa
    let aumento = 0;//será determinado pelo programa
    if(salarioColaborador <= 280){
        aumento = salarioColaborador * (20/100); //20% do salário inicial do colaborador
        salarioColaborador = salarioColaborador + aumento; //salario inicial do colaborador + valor de aumento
        percentual = "20%" //apenas para representar no console o aumento percentual
        valorAumento = salarioColaborador - salarioAnterior; //valor de aumento
    }
    else if(salarioColaborador > 280 && salarioColaborador <= 700){
        aumento = salarioColaborador * (15/100); //15% do salário inicial do colaborador
        salarioColaborador = salarioColaborador + aumento; //salario inicial do colaborador + valor de aumento
        percentual = "15%" //apenas para representar no console o aumento percentual
        valorAumento = salarioColaborador - salarioAnterior;//valor de aumento
    }
    else if(salarioColaborador > 700 && salarioColaborador <=1500){
        aumento = salarioColaborador * (10/100); //10% do salário inicial do colaborador
        salarioColaborador = salarioColaborador + aumento; //salario inicial do colaborador + valor de aumento
        percentual = "10%" //apenas para representar no console o aumento percentual
        valorAumento = salarioColaborador - salarioAnterior; //valor de aumento
    }
    else if(salarioColaborador >= 1500){
        aumento = salarioColaborador * (5/100); //5% do salário inicial do colaborador
        salarioColaborador = salarioColaborador + aumento; //salario inicial do colaborador + valor de aumento
        percentual = "5%" //apenas para representar no console o aumento percentual
        valorAumento = salarioColaborador - salarioAnterior;  //valor de aumento
    }
    else {
        console.log("Valor Inválido")
    }
    console.log(`${nomeColaborador}, seu salário de R$${salarioAnterior} foi reajustado com ${percentual} de aumento para o valor R$${salarioColaborador}, ou seja, R$${valorAumento} de acréscimo`);
}

reajusteSalarial()
