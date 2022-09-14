//Exercício com variáveis
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
const varAux = varA;

varA = varB;
varB = varC;
varC = varAux;


console.log(varA, varB, varC);