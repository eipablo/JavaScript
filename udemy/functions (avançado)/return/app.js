// return, retorna um valor e termina a função

function soma (a, b){
    // console.log(a + b); //* vai printar o resultado porém não irá retornar nada
    return a + b; //* está retornando o valor da soma
}

soma(1, 1); //* chamando funçãom, caso eu utilize o console.log eu n posso guardar o valor em uma variável pois n retorna nada, porém caso eu peça para retornar o valor se eu só chamar a função não será exibido nada, ai que eu posso guardar o valor em uma variável ou chamar a função direto de um console.log ou alert

console.log(soma(2, 2))
let retorno = soma (6, 8);
console.log(retorno)

//! As Funções não precisam sempre retornar um valor, podemos fazer funções que não retornam nada mas fazem alguma coisa como a seguir:

// const estilosBody = getComputedStyle(document.body);
// const backgroundColorBody = estilosBody.backgroundColor;

// document.addEventListener('click', function () {
//     document.body.style.backgroundColor = 
//     document.body.style.backgroundColor === 'red' ? backgroundColorBody : 'red';
// }) //* aqui a função não retorna nenhum valor, apenas alterna a cor do body a cada click

//! =============================================================================================
//* Função closure

// function falaFrase(comeco) {
//     function falaResto(resto){
//         return comeco + ' ' + resto;
//     }

//     return falaResto;
// }

// const fala = console.log(falaFrase('Olá'));
// const resto = fala('mundo!');
// console.log(resto);

function criaMultiplicador(multiplicador){
    return function(n){ //? a função criaMultiplicador, não retorna um valor direto, mas sim outra função¹
        return n * multiplicador;
    }
}

//? criando instâncias 
let duplica = criaMultiplicador(2); //* criaMultiplicador é chamada. multiplicador recebe 2
let triplica = criaMultiplicador(3); //* criaMultiplicador é chamada. multiplicador recebe 3
let quadruplica = criaMultiplicador(4); //* criaMultiplicador é chamada. multiplicador recebe 4
//? cada uma lembra do seu multiplicador

console.log(duplica(5)) //? aqui chamamos o duplica já lembrando do seu multiplicador (2), e recebendo o número que será duplicado
console.log(triplica(5))
console.log(quadruplica(5))

//? Closure é quando uma função 'Lembra do ambiente em que foi criada, mesmo depois que a função externa terminou de executar'
//? Isso permite que tenhamos funções parecidas, mas com valores diferentes guardados