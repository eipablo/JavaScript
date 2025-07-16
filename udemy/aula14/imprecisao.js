//! IEEE 754 - 2008 (Padrão das contas jscript)
//! Aqui estamos corrigindo imprecisões utilizando as funções. 
let num1 = 0.7; //* Number
let num2 = 0.1; //* Number

console.log(num1 + num2) //* Imprecisão da conta

num1 += num2; //* num1 = num1 + num2
num1 += num2;
num1 += num2;

// num1 = num1.toFixed(); 

console.log(num1);
console.log(Number.isInteger(num1)); //! O valor literal em JavaScript é considerado um inteiro, porém o valor com toFixed, pode até parecer um inteiro a olho nu porém o JavaScript não considera
//* corrigindo esse problema abaixo:
num1 = parseFloat(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));
//! fazendo isso a precisão está correta