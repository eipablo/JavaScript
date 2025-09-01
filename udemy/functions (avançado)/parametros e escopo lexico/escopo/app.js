let nome = 'Pablo';

function falaNome(){
    console.log(nome);
}

function usaFalaNome(){
    let nome = 'Vinícius';
    falaNome();
}

usaFalaNome();

//? uma função sabe de quais varáveis pode acessar baseado em onde ela foi escrita no código e não onde ela foi chamada