// 4. Faça um script que pede dois inteiros e armazene eles em duas variáveis. Em seguida, troque o valor das variáveis, invertendo e exibindo o antes e o depois em uma janela de alert.
const prompt = require('prompt-sync')({sigint: true});
/* SOLUÇÃO BURRA
let n1 = 20
let n2 = 10

let nNew = n1 + n2;
let nOld = true;

if(nNew){
    n1 = nNew - n1;
    n2 = nNew - n2;

    console.log(`NOVO N1: ${n1}`)
    console.log(`NOVO N2: ${n2}`)

    if(nOld){
        n1 = nNew - n1 
        n2 = nNew - n2

        console.log(`VELHO N1: ${n1}`)
        console.log(`VELHO N2: ${n2}`)
    }
};
*/

// SOLUÇÃO DECENTE REFATORADA

let n1 = prompt("Digite o primeiro valor: ");
let n2 = prompt("Digite o segundo valor: ");
let n1Old = n1;

if (n1 != n2) { //se n1 for diferente de n2
    n1 = n2 // entao, n1 receberá n2
    n2 = n1Old //n2 receberá n1 antigo
};
console.log(`Old ${n1Old} -> New ${n1} ; Old ${n1} -> New ${n1Old} `) //ex: n1(10) -> n1(20) ; n2(20) -> n2(10)