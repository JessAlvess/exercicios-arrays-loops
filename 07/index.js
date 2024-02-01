const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const nomesComA = [];

for (const nome of nomes) {
    if (nome[0] === 'A' || nome[0] === 'a') {
        nomesComA.push(nome)
    }
}

console.log(nomesComA);