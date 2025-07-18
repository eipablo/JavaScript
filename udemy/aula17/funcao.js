//! FUNÇÕES

function bomdia(nome){
    return `Bom dia, ${nome}!`;
} //! esse é o jeito tradicional de teclarar uma função 

const variavel = bomdia('Pablo'); //* a variavel vai receber o valor que a função retorna com return; sem o return ela ira valer undefined
//! nem toda função precisa retornar um valor

const soma = function(x, y){
    return x + y;
}; //* função anonima

const raiz = n => n ** 0.5; //* arrow function

console.log(variavel) // acessando
console.log(soma(2,10), 'Soma'); // acessando
console.log(raiz(9), 'Raiz quadrada'); // acessando