const texto = document.querySelector('#texto');
const data = new Date();

texto.innerHTML = data.toLocaleString('pt-BR', {
  dateStyle: 'full',
  timeStyle: 'short'
});
