/* 
* Escreve uma função chamada ePaisagem 
* Recebe 2 argumentos, largura e altura de uma imagem (number)
* retorna true se a imagem estiver no modo paisagem
*/

// function ePaisagem(l, a){
//     return l > a ? true : false
// } 
//* função clássica

// const ePaisagem = (l, a) => l > a ? true : false;
//* como a função retorna somente true ou false podemos simplificar ainda mais como o exemplo abaixo:
const ePaisagem = (largura, altura) => largura > altura; //* ja vai retornar true or false


console.log(ePaisagem(1080, 720)) // true
console.log(ePaisagem(720, 1080)) // false
console.log(ePaisagem(720, 720)) // false