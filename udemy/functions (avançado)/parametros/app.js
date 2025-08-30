//* a função definida com a palavra function tem um objeto especial chamado arguments
//* arguments sustenta todos os argumentos enviados para a função
//* mesmo que a função não tenha parâmetros definidos, ela pode receber argumentos através do objeto arguments

// function funcao(){
//     let total = 0;

//     for (let argumento of arguments){
//         total += argumento;
//     }
    
//     console.log(total);
// }

// funcao(5, 7, 2, 10);

// const argumentos = (...args) => { //* invés de utilizer arguments podemos simplesmente utilizar o rest operator (...)
//     console.log(args);
// }
// argumentos(1, 2, 3, 4, 5, 6, 7, 8, 9)

// ! ========================================================================================

// function funcao(a, b, c, d, e, f){
//     console.log (a, b, c, d, e, f);
// }

// funcao(1, 2, 3);
//* nesse caso, os parâmetros que não foram passados como argumentos ficam como undefined

//! ========================================================================================

// function funcao(a, b = 0){ //* b = 0 é o valor padrão do parâmetro b
//     a = a || 0; //* se a for undefined, null, NaN, '', ele recebe 0
//     console.log(a + b);
// }

// funcao();

//! ========================================================================================

// function funcaoObj ({nome, sobrenome, idade}){ //? desestruturação de objeto
//     console.log(nome, sobrenome, idade);
// }

// let obj = {nome: 'Pablo', sobrenome: 'Silva', idade: 21};
// funcaoObj(obj);

// function funcaoArray ([valor1, valor2, valor3]){ //? desestruturação de array
//     console.log(valor1, valor2, valor3);
// }

// let array = [1, 2, 3];
// funcaoArray(array);

//! ========================================================================================

// function conta (operador, acumulador, ...numeros){
//     for (let numero of numeros) {
//         if (operador === '+') acumulador += numero;
//         if (operador === '-') acumulador -= numero;
//         if (operador === '*') acumulador *= numero;
//         if (operador === '/') acumulador /= numero;
//     }

//     console.log(acumulador);
// }

// conta('+', 1, 5, 10, 15, 20);

//! =============================================================================================