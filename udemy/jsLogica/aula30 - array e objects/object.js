const pessoa = {
    nome: 'Pablo',
    sobrenome: 'Vinícius',
    idade: 21,
    endereco: {
        rua: 'Avenida Brasil',
        numero: 881,
        bairro: 'JD dos bairros'
    }
};


//* Atribuição via desestruturação

// const{nome, ...resto} = pessoa;
const { nome: n = 'não existe', sobrenome, idade} = pessoa;
console.log(n, sobrenome, idade);

const { endereco: {bairro, rua: r = 'ajsdajs', numero}, endereco} = pessoa;
console.log(endereco);
console.log(bairro, r, numero);


