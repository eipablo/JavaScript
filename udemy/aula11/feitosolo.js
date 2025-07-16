let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A
let varCoringa;

varCoringa = varA;
varA = varB;
varB = varC;
varC = varCoringa;

console.log(varA, varB, varC)  

