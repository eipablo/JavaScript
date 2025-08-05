//? ... rest(resto) e spred (espalha)
//! atribuição via desestruturação
const numeros = [1, 2, 3,4 ,5 ,6, 7 ];

const [um, dois, , quatro, ,...resto] = numeros;
        //* se eu coloco ", espaço vazio ," ele pula um index
console.log(um, dois, quatro);
console.log(resto);

let a = 'a';
let b = 'b';
let c = 'c';

[a, b, c] = [b, c, a];

console.log(a, b, c);

//                   0          1          2
//                0  1  2    0  1  2    0  1  2
const listaX2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(listaX2[2][1]); //* sem desestruturação
[, [,,seis]] = listaX2;
console.log(seis);
