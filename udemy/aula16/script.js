//*  Indices:     0          1          2      ..................
const alunos = ['Pablo', 'Raissa', 'Vinícius']; //* criando uma array

console.log(alunos); //* acessando

alunos[0] = 'Pablinho'; //* alterando um elemento do array
alunos [3] = 'Pablo'; //* adicionando um elemento no array

console.log(alunos); //* acessando

alunos.unshift('Silva'); //! a função unshift adiciona um elemento no começo da array
alunos.unshift('Duarte'); //? ex: agora Duarte é o indice 0, Silva o 1, Pablo o 2 e etc..

console.log(alunos);

alunos.push('Monteiro'); //! a função push adiciona o elemento no final da array
alunos.push('Souza'); //? ex: agora Souza é o último, monteiro o penúltimo etc

console.log(alunos);

const removidoF = alunos.pop(); //! a função pop remove o ultimo elemento da array
//? podemos colocar o elemento removido em uma variável. (não é obrigatório)
console.log(alunos);
console.log(`${removidoF} foi removido da lista!`);

const removidoC = alunos.shift(); //! a função shift remove o primeiro elemento da array
//? podemos colocar o elemento removido em uma variável. (não é obrigatório)

console.log(alunos.slice(1, 4)); //* fatiando a array, caso eu coloque numeros negativos ele pega o tamanho da array - o valor, por exemplo se eu coloco do indice 0, -1, ele vai ir do indice 0 até o penultimo valor

console.log(typeof alunos);

if (alunos instanceof Array){ //* se a variavel alunos é uma array então:
    console.log('Você está trabalhando com uma Array');
} else {
    console.log('Não é uma array');
};

//? normalmente utiliza-se push ou unshift para adicionar elementos no array, e de preferencia sempre adicionar no final