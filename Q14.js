const prompt = require ('prompt-sync')()

let val = Number(prompt("Insira o valor que vai ser fatorado"))

let i=Number, vf = 1, vaux = Number

for (i=0; i<val; i++){
    vaux = val - i
    vf = vaux * vf
}
0
console.log(vf)
