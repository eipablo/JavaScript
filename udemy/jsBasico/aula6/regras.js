// regras para declaração de variável
// Não podemos criar variável com palavras reservadas ex: If, let, const 
// Variáveis precisam ter nomes significativos ex: NomeCliente
// Não podemos começar o nome de uma variavel com um número ex: 1nome, 2nome 
// Não podem conter espaços ou traços ex Nome Cliente, Nome-Cliente
// Utilizamos camelCase
// Case-sensivite, letras maiúsculas e minúsculas se diferem
// Não podemos redeclarar variáveis com let
// Não utilize VAR, utilize LET. Sempre que achar que algo vai ser alterado na variável
// Uma constante não pode ser modificada durante o código
// Você pode colocar o valor de uma constante em outra constante porém não pode modifica-la

const n1 = 1;
const n2 = 2;
const n3 = n1 + n2;
const con = n1 + 'concatenação'

console.log(typeof n3, n3)
console.log(typeof con, con)

