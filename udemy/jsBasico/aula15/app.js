//! Objeto Math

//* Math - objeto, floor = função / Uma função que está dentro de um objeto vira um método (method)

let num1 = 5.5783904;
let num2 = Math.floor(num1); //* arredondando o número para baixo
console.log(num2); //? debugando 
let num3 = Math.ceil(num1);  //* arredondando o número para cima
console.log(num3); //? debugando 
let num4 = Math.round(num1); //* vai arredondar para o mais próximo
console.log(num4); //? debugando 

console.log(Math.max(1,2,3,4,5,6,7,8,9)); //* Vai dizer o maior número da sequência
console.log(Math.min(1,2,3,4,5,6,7,8,9)); //* Vai dizer o menor número da sequência


let aleatorio = Math.round(Math.random() * (10 - 5) + 5) //? Aqui estou gerando um número aleatório entre 10 e 5 e estou arredondando com Math.round()
console.log(aleatorio); 
/* 
* Math.random() Vai gerar um número aleatório entre 0 e 1; porém posso fazer o seguinte para gerar um número aleátorio de x a y (o que eu quizer): Math.random() * (N°MAX - N°MIN) + N°MIN, exatamente igual eu fiz ali em cima
! O 1 nunca vai ser incluido entre esses números */

console.log(Math.PI); //* Valor de PI
console.log(Math.pow(2, 10)); //* Potenciação, aqui to fazendo 2 elevado a 10
//? lembrando que potenciação também tem o operador **, que ficaria (2 ** 10)

let num5 = 9;
console.log(num5 ** (1/2)); //* Pegando a raiz quadrada com conta 
console.log(num5 ** 0.5); //* também pegando a raiz quadrada
 
console.log(100 / 0); //* quanto mais se aproxima do 0 absoluto, o js diz q é infinito e é avaliado como verdadeiro
console.log(!!(100 / 0));
