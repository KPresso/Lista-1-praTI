// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

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