const numeros = [8, 11, 4, 1];
let maiorDiferenca = -Infinity;

for (const numero of numeros) {
    for (const numero2 of numeros) {
        maiorDiferenca = numero - numero2 > maiorDiferenca ? numero - numero2 : maiorDiferenca;
    }
}

console.log(maiorDiferenca);