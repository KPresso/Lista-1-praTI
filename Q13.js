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