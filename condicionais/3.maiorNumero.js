//3. Faça um script que leia três números inteiros e mostre o maior deles.
const prompt = require('prompt-sync')({sigint: true});

{
let n1 = parseFloat(prompt("Digite o primeiro número: "));
let n2 = parseFloat(prompt("Digite o segundo número: "));
let n3 = parseFloat(prompt("Digite o terceiro número: "));
let maiorNumero = ((n1 > n2 && n1 > n3) ? n1 : (n2 > n1 && n2 > n3) ? n2 : (n3 > n1 && n3 > n2) ? n3 : "Valor Inválido");
//maiorNumero receberá n1, caso n1 seja maior que n2 e maior que n3 | receberá n2, caso n2 seja maior que n1 e maior que n3 | receberá n3, caso n3 seja maior que n1 e maior que n2. | Caso nenhuma condição satisfaça, receberá a string: VALOR INVÁLIDO.
console.log(`O maior número é ${maiorNumero}`)
}



