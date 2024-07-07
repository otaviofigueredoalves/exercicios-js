//6. Faça um script que leia três números e mostre-os em ordem decrescente.
const prompt = require('prompt-sync')({sigint:true});
let n1 = prompt("Digite o primeiro valor: ");
let n2 = prompt("Digite o segundo valor: ");
let n3 = prompt("Digite o terceiro valor: ");


let aux = n1 // recebe n1

if(n2 > n1){
    aux = n2; //aux recebe n2
    n2 = n1; //n2 recebe n1
    n1 = aux; //n1 recebe aux
}
if(n3 > n1)
    aux = n3; //aux recebe n3
    n3 = n1; // n3 recebe n1
    n1 = aux; //n1 recebe aux
if(n3 > n2){
    aux = n3; //aux recebe n3
    n3 = n2; // n3 recebe n2
    n2 = aux; // n2 recebe aux
}
    console.log(n1, n2, n3)
