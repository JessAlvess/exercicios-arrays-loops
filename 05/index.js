const original = [1, 4, 12, 21, 53, 88, 112];
const pares = [];

original.forEach(numero => {
    if (numero%2 === 0) {
        pares.push(numero)
    }
});

console.log(pares);