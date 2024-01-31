// const letras = ["A", "a", "B", "C", "E", "e"];
let soma = 0;
let encontrado = false;

const letras = ["A", "a", "B", "C", "L", "z"];



for (const letra of letras) {
    if (letra === 'e' || letra === 'E') {
        soma += 1;
        encontrado = true;
    }
}

if (encontrado) {
    console.log(`Foram encontradas ${soma} letras "E" ou "e".`);
} else {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
}

