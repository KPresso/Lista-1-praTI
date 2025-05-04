/* 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
const prompt = require ('prompt-sync')()

let val 
val= Number(prompt("Insira um valor para ser lido como par ou impar, digitar Sair termina o programa:  "))


resultado = val%2

if (resultado == 0)
    console.log("É um numero Par!")

else 
    console.log("É um número Impar!")




2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura decontrole if-else.

const prompt = require('prompt-sync')()

let idade 

do {
idade = Number(prompt(console.log("Insira sua idade: "))) 
} while (isNaN(idade) == true)




const infantil = (idade < 12)
const adolescente = (idade >= 12 && idade < 18)
const adulto = (idade >= 18 && idade < 60 )
const idoso = (idade >= 60)



if (!isNaN(idade)) {
switch (true) {
    case infantil: 
        console.log("Você é uma criança")
        break;

    case adolescente: 
        console.log("Você é um adolescente")
        break;

    case adulto: 
        console.log("Você é um adulto")
        break;

    case idoso: 
        console.log("Você é um idoso")
        break;

}
}




3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.10

const prompt = require ('prompt-sync')()

let nota 

do {
nota = Number(prompt("Insira sua nota, de 1 a 10: "))
} while (nota > 10 || nota < 1)


const aprovado = (nota > 7)
const recuperação = (nota == 6)
const reprovado = (nota < 6)


if (!isNaN(nota)) {
switch (true){
    case aprovado: 
    console.log("Parabéns, você foi aprovado")
    break;

    case recuperação:
    console.log("Você está de recuperação")
    break;

    case reprovado:
    console.log("Você foi reprovado")
    break;
}
}




4.Crie um menu interativo no console que oferece ao usuário a escolha de três opções.  Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')()

let esc

do {
console.log("\n1: Maçãs, 2R$ o kg    \n2: Laranjas, 1.5R$ o kg \n3: Peras, 3R$ o kg")
esc = Number(prompt("Insira o que você deseja comprar "))
} while (esc < 1 || esc > 3 || isNaN(esc) == true)


let quant = prompt("Quantos KG você deseja?")

let resultado

switch (esc) {
    case 1: 
        resultado= quant * 2
        console.log("O preço total ficou: " + resultado)
        break;
    
    case 2: 
        resultado= quant * 1.5
        console.log("O preço total ficou: "+resultado)
        break;

    case 3: 
        resultado= quant * 3
        console.log("O preço total ficou: " +resultado)
        break;
}




5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

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




6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

const prompt = require ('prompt-sync')()

let A, B, C, F=0, F2=0

A = Number(prompt("Insira a primeira medida do triangulo: "))
B = Number(prompt("Insira a segunda medida do triangulo: "))
C = Number(prompt("Insira a terceira medida do triangulo: "))

if (A == B || B == C || C == A)
    F++

if(A+B<C && A+C<B && B+C<A)
    F2++

if (F2 = true){
    console.log("É um triangulo valido e ")

    if (A==B && A==B && B==C) {
        console.log("É um triangulo equilátero")
    }
    else if (A!=B && A!=B && B!=C) {
        console.log("É um triangulo escaleno")
    }
    else if ((A!=B || A!=B || B!=C) && F==true) {
        console.log("É um triangulo isósceles")
    }

}

else {
    console.log ("O triangulo não é valido")
} 




7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

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


8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require ('prompt-sync')()

let v1, v2

v1 = prompt("Insira seu primeiro valor: ")

do {
v2 = prompt("Insira seu segundo valor: ") } while (v1 == v2)

if (v1 > v2){
    console.log(`${v1} é maior que ${v2}`)
}

else {
    console.log(`${v2} é maior que ${v1}`)
}




9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.

const prompt = require ('prompt-sync')()

let i=10

for (i; i>0; i--)
    console.log(i)




10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require ('prompt-sync')()

let val

do {
val = prompt("Insira um valor: ")
} while (!isNaN == (true))

for (let i=0; i<10; i++)
    console.log(val)




11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const prompt = require('prompt-sync')()

let val, vt=0

for (let i=0; i<5; i++){
    val = Number(prompt("Insira um numero, a soma final dos numeros será dita no final: "))
    vt = vt + val
}

console.log(`O valor total é ${vt}`)




12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require ('prompt-sync')()

let val = Number

val = prompt("Insira um valor para ver sua tabuada")

for (let i=1; i<=10; i++){
    console.log(val * i)
}





13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require ('prompt-sync')()

let val= Number, i=0, vt = Number, media = Number

vt = 0

console.log("Insira quantos valores desejar para fazer uma média, digitar 0 encerra e diz sua média final")

do {
val = Number(prompt(`Insira seu ${i+1}° valor`))
i++
vt = val + vt 
}while (val != 0)

media = vt/(i-1)

console.log("Sua medida é: " +media)




14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const prompt = require ('prompt-sync')()

let val = Number(prompt("Insira o valor que vai ser fatorado"))

let i=Number, vf = 1, vaux = Number

for (i=0; i<val; i++){
    vaux = val - i
    vf = vaux * vf
}
0
console.log(vf)




15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

const prompt = require ('prompt-sync')()

let v1=0, v2=1, i, aux=0


for (i=0; i<10; i++){
   console.log(v1)
   aux = v1+v2
   v1 = v2
   v2 = aux
} */