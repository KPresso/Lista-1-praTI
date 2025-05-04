//Implemente um programa que recebe uma nota de 0 a 10 e classifica como"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.10

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
