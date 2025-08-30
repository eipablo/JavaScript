//* Declaração de função (function hoisting)
falaOi(); 
/* 
?    não precisa declarar a função antes de chamar;
?    function hoisting = içamento de função 
?    a função é "içada" para o topo do arquivo, ou seja, ela pode ser chamada antes de ser declarada
*/

function falaOi() {
    console.log('Oi');
}; //* podemos atribuir parametros na função, e também podemos retornar valores

//! =========================================================================================

//* first-class objects (objetos de primeira classe)
// Functions expression
const souUmDado = function() {
    console.log('Sou um dado.');
};
/*
?    nesse caso, a função foi atribuída a uma variável, e só pode ser chamada depois de declarada (hoisting não funciona aqui)
*/  

function executaFuncao(funcao) { //* função que recebe outra função como parâmetro
    console.log('Vou executar sua função abaixo:');
    funcao(); //* executa a função passada como parâmetro
}
executaFuncao(souUmDado);
//* nesse caso, a função foi passada como parâmetro para outra função

//! =========================================================================================

//* Arrow function
//* funciona como uma function expression, ou seja, precisa ser declarada antes de ser chamada e não sofre hoisting
const funcaoArrow = () => { 
    console.log('Sou uma arrow function');
}
funcaoArrow();
//* também pode receber parâmetros
const funcaoArrow2 = (a, b) => a + b; 
console.log('soma:', funcaoArrow2(5, 7)); //* nesse caso, a função retorna o valor da soma de a + b


//! =========================================================================================
//* Dentro de um objeto
const obj = {
    falar: function(){
        console.log('Estou falando...');
    }
}

obj.falar();
//* nesse caso, a função foi declarada dentro de um objeto

//* Dentro de um array
const testes = [function(){console.log('Estou em um array (1)');}, function(){console.log('Estou em um array (2)');}]

for (let i = 0; i < testes.length; i++){
    testes[i]();
}