//* For OF para arrays e strings
//* serve para percorrer valores diretamente, ótimo para listas e textos
//? Sei quantas repetições? ➡ for clássico
//? Quero chaves de um objeto? ➡ for...in
//? Quero valores de um array ou string? ➡ for...of


const nome = 'Pablo Vinícius';

for (let valor of nome){
    console.log(valor);
}

const frutas = ['maça', 'pera', 'kiwi', 'melancia'];

for (let fruta of frutas){
    console.log(fruta);
}