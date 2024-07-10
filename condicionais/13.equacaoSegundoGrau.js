//13. Faça um script que calcule as raízes de uma equação do segundo grau, na forma ax² + bx + c. O script deverá pedir os valores de a, b e c e fazer os testes necessários.

const prompt = require('prompt-sync')({sigint: true});

const a = parseFloat(prompt("Digite o valor de a: "));
const b = parseFloat(prompt("Digite o valor de b: "));
const c = parseFloat(prompt("Digite o valor de c: "));


const calcularDelta = (aD,bD,cD) => {
    let deltaCalc = (bD * bD) - 4 * aD * cD;
    return deltaCalc;
}  //funçao que calcula o delta

const delta = calcularDelta(a,b,c); //chamada da função calcularDelta. Irá enviar as variáveis que serão utilizadas na função e armazenar o return

const calcularBhaskara = (deltaR) => {
    let x1 = (-b + (Math.sqrt(deltaR)))/(2 * a); //fórmula de bháskara (x1)
    let x2 = (-b - (Math.sqrt(deltaR)))/(2 * a); //fórmula de bháskara (x2)
    return (`(+)x1: ${x1} (-)x2: ${x2}`) //retorna x1 e x2
} // essa função usa o valor dado pela função calcularDelta (armazenado na const delta), para finalizar o cálculo de bhaskara.

const bhaskara = calcularBhaskara(delta) // chamada da função calcularBhaskara. Irá enviar o valor de delta e armazenar o return

console.log(bhaskara)