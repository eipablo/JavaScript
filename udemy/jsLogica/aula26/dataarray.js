const diaDaSemana = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
 
const data = new Date();
 
console.log(`Hoje é ${diaDaSemana[data.getDay()]}`);

//* cria uma array com os index sendo representados pelos dias da semana e utilize a função getDay() para representar os index da array