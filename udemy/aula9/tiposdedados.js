// string, number, undefined (quando não inicializamos uma variável), null (quando não aponta pra local nenhum na memória), boolean, symbol.

const string1 = "Pablo"; /*-----------*/
const string2 = 'Pablo'; /*  String   */
const string3 = `Pablo`; /*-----------*/

const num1 = 10; // Number
const num2 = 10.10; // Number

let nomeAluno; // Undefined -> não aponta para local nenhum na memória
let sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória

const aprovado = true; // Boolean = true, false (lógico)

console.log(typeof sobrenomeAluno, sobrenomeAluno)