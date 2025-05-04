const prompt = require ('prompt-sync')()

let v1=0, v2=1, i, aux=0


for (i=0; i<10; i++){
   console.log(v1)
   aux = v1+v2
   v1 = v2
   v2 = aux
}