//* faça uma função que recebe 2 números e retorna o maior dentre eles

function maior(num1, num2){
    if (num1 === num2) return "Os números são iguais";
    return num1 > num2 ? num1 : num2;
} //* utilizando a função clássica

const maior2 = (x, y) => {
    if (x === y) return 'São iguais';
    return x > y ? x : y;
} //* utilizando arrow function

console.log(maior2(2, 1)); // 2
console.log(maior2(5, 9)); // 9
console.log(maior2(3, 3)); // Os números são iguais