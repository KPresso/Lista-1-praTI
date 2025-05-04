const prompt = require ('prompt-sync')()

let val = Number

val = prompt("Insira um valor para ver sua tabuada")

for (let i=1; i<=10; i++){
    console.log(val * i)
}