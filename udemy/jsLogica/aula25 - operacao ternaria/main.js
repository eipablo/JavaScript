//* Operação ternária
//! ? :

// if(pontoUsuario >= 1000){
//     console.log('Usuario Vip');
// } else{
//     console.log('Usuario Normal');
// }

//* abaixo utilizarei o encurtamento da expressão acima com operação ternária:
const pontoUsuario = 1000;
//!                  (CONDIÇÃO)       ? Valor para true : Valor para false
const nivelUsuario = pontoUsuario >= 1000 ? 'Usuario Vip' : 'Usuario Normal';

console.log(`${nivelUsuario}, pontuação igual a ${pontoUsuario}`);
//? -----------------------------------------------------------------------------

const corUsuario = null;
const corPadrao = corUsuario || 'preta';

console.log(corPadrao);