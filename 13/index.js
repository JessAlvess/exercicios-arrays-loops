// const disjuntores = [false, false, true, false, false, true, false, false];

const disjuntores = [
    false,
    true,
    true,
    false,
    false,
    true,
    false,
    false,
    true,
    true,
  ];

for (let i = 0; i < disjuntores.length; i++) {
    const imprimir = disjuntores[i] ? console.log(i):0;
}