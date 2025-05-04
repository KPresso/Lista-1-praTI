const prompt = require('prompt-sync')()

let val, vt=0

for (let i=0; i<5; i++){
    val = Number(prompt("Insira um numero, a soma final dos numeros será dita no final: "))
    vt = vt + val
}

console.log(`O valor total é ${vt}`)