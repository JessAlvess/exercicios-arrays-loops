let multiplos = [];
let index = 0
do {
    const numero = 3 * index
    if (numero > 500) {
        break;
    }
    multiplos.push(numero);
    index += 1;
} while (multiplos[multiplos.length - 1] <= 500);

for (const numero of multiplos) {
    console.log(numero);
}