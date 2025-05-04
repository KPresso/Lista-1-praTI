// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let prompt = require ('prompt-sync')()

let q, val 

q = prompt("Quantas maçãs você deseja?")

if (q < 12){
    val = 0.3*q
    console.log(`O preço total é ${val} R$`)
}

else {
    val = 0.2*q
    console.log("O preço total é: "+val.toFixed(2)+ " R$")
}
