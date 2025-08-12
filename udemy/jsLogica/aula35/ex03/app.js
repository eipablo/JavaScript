/*
    Escreve uma função que recebe um número e retorna o seguinte:
    Número é divisível por 3 = Fizz
    Número é divisível por 5 = Buzz
    Número é divisivel por 3 e 5 = FizzBuzz
    Número NÃO é divisível por 3 e 5 = retorna o próprio número
    Checar se o número é realmente um número
    use a função com números de 0 a 100
*/



// function fizzBuzz(num){
//     if (typeof num !== 'number'){
//         return num;
//     }
    
//     if (num % 3 === 0 && num % 5 === 0){
//         return 'FizzBuzz';
//     } else if (num % 3 === 0){
//         return 'Fizz'
//     } else if (num % 5 === 0){
//         return 'Buzz'
//     } else{
//         return num;
//     }

// }

function fizzBuzz(num){
    if (typeof num !== 'number') return num;
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num;
}

for (let i = 0; i <= 100; i++){
    console.log(fizzBuzz(i));
} //* executando com os números de 0 a 100

console.log(fizzBuzz('isso é uma string')) //* testando com um NaN