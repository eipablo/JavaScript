//* objeto DATE
//? é uma função contrutora, ela sempre começa com new e a primeira letra maiuscula
//? em js os mêses começam em 0 e vão até 11, sendo 0 = janeiro e 11 = a dezembro
const dataAtual = new Date(); //! vai retornar a data atual

const dataMilesimo = new Date(0); //! vai retornar a data considerando milésimo de segundo, aqui vai retornar o marco 0 

const data = new Date(2004, 6, 4); //! Ano, Mes, Dia, Hora, Minuto, Segundo, Milésimo

const dataString = new Date('2004-07-04 17:30:40.500'); ;//! data em formato de string (é a mais utilizada), pode ser enviada desse jeito ou assim: '2004-07-05T17:30:40' podendo também ser adicionado os milésimos com um . e o valor após o ponto

console.log(dataString.toString()); //? retorna a data toda
console.log('Dia:', dataString.getDate()); //? retorna o dia
console.log('Mês:', dataString.getMonth() + 1); //? retorna o mês baseado no js, então caso queira o mês real faça + 1
console.log('Ano:', dataString.getFullYear()); //? retorna o ano
console.log('Hora:', dataString.getHours()); //? retorna as horas
console.log('Minutos:', dataString.getMinutes()); //? retorna os minutos
console.log('Segundos:', dataString.getSeconds()); //? retorna os segundos
console.log('MS:', dataString.getMilliseconds()); //? retorna os milisegundos
console.log('Dia Semana:', dataString.getDay()); //? retorna o dia da *SEMANA*, dia da semana começa em 0 (domingo)
console.log(Date.now()); //? retorna a data atual em milésimos de segundo desde o marco 0