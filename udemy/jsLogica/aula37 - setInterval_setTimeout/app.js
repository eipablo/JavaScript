function mostraHora(){
    let data = new Date('01/01/2001  00:00:00');

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function (){
    console.log(mostraHora())
}, 1000);

setTimeout(function () {
    clearInterval(timer)
}, 3200)

// setTimeout(function (){
//     console.log('Olá mundo')
// }, 3200)

