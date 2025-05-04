//Crie um menu interativo no console que oferece ao usuário a escolha de três opções. 
// Utilize switch-case para implementar a lógica de cada opção selecionada.

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
