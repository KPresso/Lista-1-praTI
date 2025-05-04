const prompt = require ('prompt-sync')()

let val

do {
val = prompt("Insira um valor: ")
} while (!isNaN == (true))

for (let i=0; i<10; i++)
    console.log(val)