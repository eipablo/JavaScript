//! MAP pode alterar o valor original do array | objeto


// dobre os numeros

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map(valor => valor * 2);

// console.log(numerosEmDobro)


//para cada elemento:
//retorne apenas uma string com o nome da pessoa
//remova apenas a chave nome do objeto
//adicione a chave id no objeto
const pessoas = [
{nome: 'Luiz', idade: 62},
{nome: 'Maria', idade: 23},
{nome: 'Eduardo', idade: 55},
{nome: 'Letícia', idade: 19},
{nome: 'Rosana', idade: 32},
{nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map(obj => obj['nome']);
// console.log(nomes);

const idades = pessoas.map(obj => ({ idade: obj.idade })); //* estou utilizando parenteses nesse caso pois caso não tenha a linguagem vai confundir com o parenteses da função anonima 
// console.log(idades);

const comIds = pessoas.map((obj, indice) => {
    const newObj = { ...obj }; //* criando novo objeto pois não quero modificar o objeto original
    newObj.id = Math.random() * (100 - 1) + 1;
    newObj.id = Number(newObj.id.toFixed());
    return newObj;
})

// console.log(comIds)
// console.log(pessoas)