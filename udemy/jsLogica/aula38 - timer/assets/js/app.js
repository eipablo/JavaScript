function relogio() {

//! função que retorna a hora formatada recebendo segundos
function getHourFromSecond(segundos){
    const data = new Date(segundos * 1000); //? multiplicando por mil para virar segundos pois o new date recebe em milisegundos
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC', 
    });
};

//* =====================VARIÁVEIS===============================
const relogio = document.querySelector('.relogio'); //? pegando o texto
const iniciar = document.querySelector('.start'); //? pegando o botão
const pausar = document.querySelector('.pause'); //? pegando o botão
const zerar = document.querySelector('.end'); //? pegando o botão

let segundos = 0; //? váriavel para iniciar os segundos

let timer; //? váriavel timer para parar / iniciar o relógio
//* ==============================================================

//! Função que iniciar o relógio acrescentando +1 na variável segundo a cada 1000 milésimos (1 segundo);
function startClock(){ 
    timer = setInterval(function() {
        segundos++;
        relogio.textContent = getHourFromSecond(segundos);
    }, 1000); 
}


//! escutador de evento (CLICK) no botão iniciar
iniciar.addEventListener('click', function (e){
    console.log('clicou em iniciar');
    clearInterval(timer);
    relogio.classList.remove('pausado');
    startClock();
    iniciar.disabled = true;
    pausar.disabled = false;
});

//! escutador de evento (CLICK) no botão pausar
pausar.addEventListener('click', function(e){
    console.log('clicou em pausar');
    clearInterval(timer);
    iniciar.disabled = false;
    pausar.disabled = true;
    relogio.classList.add('pausado')
});

//! escutador de evento (CLICK) no botão zerar
zerar.addEventListener('click', function(e){
    console.log('clicou em zerar');
    clearInterval(timer);
    relogio.textContent = `00:00:00`
    segundos = 0;
    relogio.classList.remove('pausado');
    iniciar.disabled = false;
    pausar.disabled = true;
});
}


relogio(); 