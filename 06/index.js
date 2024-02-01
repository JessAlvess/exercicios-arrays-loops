const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
const pares = [];
let soma = 0;

numeros.forEach(numero => {
    if (numero %2 === 0) {
        pares.push(numero)        
    }
})

for (const numero of pares) {
    soma += numero;
}

console.log(soma);