const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numeros = Array.from({ length: 101 }, (_, i) => i);

let i = 0

while (i < numeros.length){
    let numero = numeros[i]

    if (numero === 2 || numero === 5){
        console.log('pulei um número')
        i++
        continue;
    } //* vai parar a repetição aqui e não vai exibir o número 2

    console.log(numero);

    if(numero === 8){
        console.log('Saindo...')
        i++
        break;
    } //* para completamente a repetição 

    i++
}