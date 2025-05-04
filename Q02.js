//Crie um programa que classifica a idade de uma pessoa em categorias (criança,adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura decontrole if-else.

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
