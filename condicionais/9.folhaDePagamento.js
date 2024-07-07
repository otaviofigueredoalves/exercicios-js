// 9. Faça um script para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O script deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.

//     Desconto do IR:
//     Salário Bruto até 900 (inclusive) - isento
//     Salário Bruto até 1500 (inclusive) - desconto de 5%
//     Salário Bruto até 2500 (inclusive) - desconto de 10%
//     Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.

//     Salário Bruto: (5 * 220)        : R$ 1100,00
//     (-) IR (5%)                                : R$   55,00
//     (-) INSS ( 10%)                       : R$  110,00
//     FGTS (11%)                            : R$  121,00
//     Total de descontos                : R$  165,00
//     Salário Liquido                       : R$  935,00
const prompt = require('prompt-sync')({sigint:true});

function folhaDePagamento(){
    let valorHora = parseFloat(prompt("Digite o valor da sua hora: "));
    let quantidadeHora = parseInt(prompt("Digite a quantidade de horas trabalhadas no mês: "));
    let salarioBruto = valorHora * quantidadeHora;  //operação simples pra calcular o salário bruto do usuário
    const fgtsP = 11/100; //valor fixo de 11%
    const inssP = 10/100; //valor fixo de 10%
    let ir = 0; // determinado pela condicional
    let fgts = 0; // determinado pela condicional
    let totalDesconto = 0; // determinado pela condicional
    let salarioLiquido = 0; // determinado pela condicional
    let inss = 0; // determinado pela condicional

    if(salarioBruto <= 900) {
        fgts = fgtsP * salarioBruto; //11% do salário bruto
        inss = inssP * salarioBruto; //10% do salário bruto
        ir = ir * salarioBruto;
        totalDesconto = inss + ir; //valor descontado
        salarioLiquido = (salarioBruto - totalDesconto).toFixed(2); //limita à 2 casas decimais
    }// não é descontado pelo ir
    else if(salarioBruto <= 1500){
        fgts = fgtsP * salarioBruto; //11% do salário bruto
        inss = inssP * salarioBruto; //10% do salário bruto
        ir = 5/100;
        ir = ir * salarioBruto; 
        totalDesconto = inss + ir; //valor descontado
        salarioLiquido = (salarioBruto - totalDesconto).toFixed(2); //limita à 2 casas decimais
    } // ir de 5%
    else if(salarioBruto <= 2500){
        fgts = fgtsP * salarioBruto; //11% do salário bruto
        inss = inssP * salarioBruto; //10% do salário bruto
        ir = 10/100;
        ir = ir * salarioBruto;
        totalDesconto = inss + ir; //valor descontado
        salarioLiquido = (salarioBruto - totalDesconto).toFixed(2);//limita à 2 casas decimais
    }// ir de 10%
    else if(salarioBruto > 2500){
        fgts = fgtsP * salarioBruto; //11% do salário bruto
        inss = inssP * salarioBruto; //10% do salário bruto
        ir = 20/100;
        ir = ir * salarioBruto;
        totalDesconto = inss + ir; //valor descontado
        salarioLiquido = (salarioBruto - totalDesconto).toFixed(2);//limita à 2 casas decimais
    } // ir de 20%
   
    console.log(`--------------------------------------\n Salário Bruto: (${valorHora} * ${quantidadeHora})   :R$${salarioBruto} \n (-) IR (5%)                 :R$${(ir).toFixed(2)}\n (-) INSS (10%)              :R$${(inss).toFixed(2)}\n FGTS (11%)                  :R$${(fgts).toFixed(2)}\n Total de descontos          :R$${(totalDesconto).toFixed(2)}\n Salário Líquido             :R$${salarioLiquido}\n --------------------------------------`)
}

folhaDePagamento(); //chamada da função folhaDePagamento