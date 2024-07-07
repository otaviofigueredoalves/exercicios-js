// 12. Faça um script que peça os 3 lados de um triângulo. O script deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.

//     Dicas:
//     Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
//     Triângulo Equilátero: três lados iguais;
//     Triângulo Isósceles: quaisquer dois lados iguais;
//     Triângulo Escaleno: três lados diferentes;

const prompt = require('prompt-sync')({sigint: true});

const ladoA = parseFloat(prompt("Digite o primeiro valor: "));
const ladoB = parseFloat(prompt("Digite o segundo valor: "));
const ladoC = parseFloat(prompt("Digite o terceiro valor: "));


const validarTriangulo = (a, b, c) =>{
    let validateTriangulo = false;
    if((a + b) > c && (b + c) > a && (c + a) > b){
        validateTriangulo = true;
        return validateTriangulo
    } else {
        return validateTriangulo;
    }
} //função que valida se os valores fornecidos formam um triângulo
const triangulo = validarTriangulo(ladoA, ladoB, ladoC); // chamada da função validarTriangulo. Enviará os valores fornecidos pelo usuário e armazenar o return

const definirTriangulo = (triangulo) => {
    let tipoTriangulo = ""
    if(triangulo == true){
        if(ladoA == ladoB && ladoB == ladoC){
            //todos os lados iguais
            tipoTriangulo = "Triangulo Equilátero";
        }
        else if(ladoA == ladoB || ladoB == ladoC || ladoC == ladoA){
            //qualquer dois lados iguais
            tipoTriangulo = "Triangulo Isóceles";
        }
        else if(ladoA != ladoB && ladoB != ladoC){
            //três lados diferentes
            tipoTriangulo = "Triangulo Escaleno";
        } else {
            tipoTriangulo = "Não foi possível definir o tipo de triângulo";
        }
        return tipoTriangulo;

    } else {
        tipoTriangulo = "Não é um triangulo";
        return tipoTriangulo;
    } 
    
    //Irá definir se é um triângulo ou não. Caso seja, irá determinar o tipo de triangulo
}

const tipoTriangulo = definirTriangulo(triangulo); // chamada da função definirTriangulo envia o valor da função validarTriangulo e armazena o return

console.log(`LADO A: ${ladoA} | LADO B: ${ladoB} | LADO C ${ladoC} || Tipo de triangulo: ${tipoTriangulo} `);