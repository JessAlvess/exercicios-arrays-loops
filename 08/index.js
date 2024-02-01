// const numeros = [3, 24, 1, 8, 11, 7, 15];
const numeros = [3, 4, 1, 8, 11, 7, 5];
let maiorNumero = -Infinity;

for (const number of numeros) {
    maiorNumero = number > maiorNumero? number : maiorNumero;    
}

console.log(maiorNumero);