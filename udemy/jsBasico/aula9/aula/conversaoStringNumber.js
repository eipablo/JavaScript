// NaN = not a number; parseInt = Inteiro, parseFloat = decimais


const num1 = 1; // number
const num2 = parseInt('5'); //number, convertendo string para inteiro
const num3 = parseFloat('5.2'); //number convertendo string para decimal
const num4 = Number('10'); // jeito mais moderno converte ambos
const num5 = Number('10.5'); // idem
const num6 = Number('Pablo') // NaN
console.log(num1 * num6)
console.log(typeof num2, typeof num3, typeof num4, typeof num5)