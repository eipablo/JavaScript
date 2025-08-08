//* For in lê os indices e as chaves 
//* serve para percorrer as propriedades de um objeto



const pessoa = {
    nome: 'Pablo',
    sobrenome: 'Vinícius',
    idade: 21
};

//* modos de acessar uma key de um objeto
// const chave = 'idade';
// console.log(pessoa.nome);
// console.log(pessoa['sobrenome']);
// console.log(pessoa[chave]); 

for (let key in pessoa){
    console.log(`${key}: ${pessoa[key]}`);
}

const frutas = [
    'maça', 'banana', 'pera', 'kiwi'
];

for (let i in frutas){
    console.log(`indice (${i}), representa ${frutas[i]}`);
}