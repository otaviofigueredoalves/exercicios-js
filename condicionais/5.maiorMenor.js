// 5. Faça um script que leia três números inteiros, em seguida mostre o maior e o menor deles.
const prompt = require('prompt-sync')({sigint:true});

n1 = prompt("Digite o primeiro valor: ");
n2 = prompt("Digite o segundo valor: ");
n3 = prompt("Digite o terceiro valor: ");

maiorN = 0;
menorN = 0;

maiorN = ((n1 > n2 && n1 > n3) ? n1 : (n2 > n1 && n2 > n3) ? n2 : (n3 > n1 && n3 > n2) ? n3 : "VALOR INVÁLIDO"); //determina o maior número entre os 3 fornecidos
menorN = ((n1 < n2 && n1 < n3) ? n1 : (n2 < n1 && n2 < n3) ? n2 : (n3 < n1 && n3 < n2) ? n3 : "VALOR INVÁLIDO"); //determina o menor número entre os 3 fornecidos

console.log(`Maior número: ${maiorN} e Menor número: ${menorN}`)