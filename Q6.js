// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

const prompt = require ('prompt-sync')()

let A, B, C, F=0, F2=0

A = Number(prompt("Insira a primeira medida do triangulo: "))
B = Number(prompt("Insira a segunda medida do triangulo: "))
C = Number(prompt("Insira a terceira medida do triangulo: "))

if (A == B || B == C || C == A)
    F++

if(A+B<C && A+C<B && B+C<A)
    F2++

if (F2 = true){
    console.log("É um triangulo valido e ")

    if (A==B && A==B && B==C) {
        console.log("É um triangulo equilátero")
    }
    else if (A!=B && A!=B && B!=C) {
        console.log("É um triangulo escaleno")
    }
    else if ((A!=B || A!=B || B!=C) && F==true) {
        console.log("É um triangulo isósceles")
    }

}

else {
    console.log ("O triangulo não é valido")
}