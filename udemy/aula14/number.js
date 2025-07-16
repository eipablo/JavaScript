/*
* Convertendo Number para String, e modificando o tipo da váriavel
let num1 = 1; // Number
let num2 = 2.5 // Number

console.log(num1.toString() + num2); //! Convertendo o num1 para string temporariamente sem modificar o tipo da váriavel
console.log(`${num1} (num1) recebe o tipo:`, typeof num1);

console.log(`Agora vou converter a váriavel num1 (${num1}) para string`)
num1 = num1.toString(); //! aqui estou convertendo o tipo da variável 
console.log(`${num1} (num1) é do tipo:`, typeof num1); 

*/

/*
* Abreviando floats, verificando se um número é um inteiro, e verificando se um resultado é NaN.
let dec1 = 2.6374868943289423;
let num3 = 34
let temp = 34 * '5' // ! Não é uma boa prática de programação fazer contas com strings diretamente, não devemos confiar 100% no Jscript, o correto seria converter antes de fazer a conta, ex: Number(Váriavel aqui!)

console.log(`Abreviando a váriavel dec1: ${dec1.toFixed(2)}`);
console.log(`Verificando se um número é um inteiro: ${Number.isInteger(dec1)}`);
console.log(`Verificando se uma conta é um NaN: ${Number.isNaN(temp)}`); 
*/