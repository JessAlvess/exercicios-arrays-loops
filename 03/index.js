// const numeros = [54, 12, 14, 87, 10, 284];
let encontrado = false;
let indice;

// const numeros = [54, 22, 14, 10, 284];
const numeros = [54, 22, 14, 87, 284];

for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] === 10 ) {
        encontrado = true;
        indice = index;
        break;
    }
}

if (encontrado) {
    console.log(indice);
} else {
    console.log(-1);
}