//! Filter -> Sempre retornará um array, com a mesma quantidade de elementos ou menos.
//! Filter -> Não altera o objeto ou array original.

//? Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter(valor => valor > 10); //* quando a função tem só uma linha o retorno é implicito

// console.log(numerosFiltrados);


//? Retorne as pessoas que tem o nome com 5 letras ou mais
//? Retorne as pessoas com mais de 50 anos
//? Retorne as pessoas cujo nome termina com a
const pessoas = [
{nome: 'Luiz', idade: 62},
{nome: 'Maria', idade: 23},
{nome: 'Eduardo', idade: 55},
{nome: 'Letícia', idade: 19},
{nome: 'Rosana', idade: 32},
{nome: 'Wallace', idade: 47},
];


const nomeMaiorQ5 = pessoas.filter(obj => obj['nome'].length >= 5);
// console.log(nomeMaiorQ5);

const idadeMaiorQ50 = pessoas.filter(obj => obj['idade'] > 50);
// console.log(idadeMaiorQ50);

const terminaComA = pessoas.filter(obj => {
    //? if (obj['nome'].charAt(obj.nome.length - 1) === 'a') return true;  // jeito que eu fiz
    return obj['nome'].toLowerCase().endsWith('a');
});

console.log(terminaComA)
