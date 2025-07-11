/* Colinha
Pablo Vinícius Silva Souza tem 21 anos, pesa 70 kg tem 1.88 de altura e seu imc é x
Pablo Vinícius nasceu em 2004
*/ 
const nome = 'Pablo Vinícius';
const sobrenome = 'Silva Souza';
const idade = 21;
const peso = 70;
const alturaEmM = 1.88;
let imc; // peso / (altura * altura)
imc = peso / (alturaEmM * alturaEmM);
const anoAtual = 2025;
let anoNascimento = anoAtual - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg, tem', alturaEmM, 'de altura e seu IMC é',imc + '.');
console.log(nome, 'nasceu em', anoNascimento + '.');

// outra maneira de estruturar esse código

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg tem ${alturaEmM} de altura e seu IMC é ${imc}.`);
console.log (`${nome} nasceu em ${anoNascimento}.`);

// é uma forma mais legivel e mais morderna de estruturar o código