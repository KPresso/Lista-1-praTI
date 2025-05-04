//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
const prompt = require ('prompt-sync')()

let val 
val= Number(prompt("Insira um valor para ser lido como par ou impar, digitar Sair termina o programa:  "))


resultado = val%2

if (resultado == 0)
    console.log("É um numero Par!")

else 
    console.log("É um número Impar!")