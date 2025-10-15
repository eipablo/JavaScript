const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//? some todos os números [reduce]
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    return acumulador;
}, 0); //* podemos colocar um valor inicial para o acumulador aqui, caso não tiver valor inicial ele vai utilizar o primeiro indice do array

// console.log(total)

const pessoas = [
{nome: 'Luiz', idade: 62},
{nome: 'Maria', idade: 23},
{nome: 'Eduardo', idade: 55},
{nome: 'Letícia', idade: 19},
{nome: 'Rosana', idade: 64},
{nome: 'Wallace', idade: 47},
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    console.log(acumulador, valor)
    if(acumulador.idade > valor.idade) return acumulador;
    return valor
})

console.log(maisVelha)