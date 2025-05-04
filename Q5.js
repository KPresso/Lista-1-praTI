// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

prompt = require ('prompt-sync')()

let peso, resultado, altura, imc

peso = Number(prompt("Insira seu peso em KG: "))
altura = Number(prompt("Insira sua altura em metros: "))

resultado = peso / (altura * altura)
imc = resultado

console.log("Seu IMC é: " + imc)

if (imc < 16){
    console.log("Você está com baixo peso muito grave.")
}
else if (imc <= 17){
    console.log("Você está com peso bem baixo.")
}
else if (imc <= 18.5){
    console.log("Você está com o peso abaixo da média.")
}
else if (imc <= 25){
    console.log("Você está com o peso normal.")
}
else if (imc <= 30){
    console.log("Você está com sobrepeso.")
}
else if (imc <= 35){
    console.log("Você está com obesidade grau 1.")
}
else if (imc <= 40){
    console.log("Você está com obesidade grau 2.")
}
else if (imc > 40){
    console.log("Você está com obesidade grau 3.")
}
