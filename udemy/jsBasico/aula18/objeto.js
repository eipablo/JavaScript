//! para criar um objeto se utiliza {}
const pessoa1 = {
    nome: "Pablo",
    sobrenome: "Vinícius",
    idade: 21,

    fala(){
        console.log(`${pessoa1.nome} ${pessoa1.sobrenome} está falando oi..`)
    }, //* posso criar funções dentro de objetos

    incrementaIdade(){
        pessoa1.idade++;
        console.log('Agora minha idade é', pessoa1.idade);
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();


function criaPessoas(nome, sobrenome, idade){ //* paramêtros nome, sobrenome e idade
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
} //* posso abreviar isso para só nome, sobrenome, idade. Pois são repetidos

const pessoa2 = criaPessoas('Raissa', 'monteiro', 19); //* argumentos Raissa, Monteiro, 19
console.log(pessoa2)