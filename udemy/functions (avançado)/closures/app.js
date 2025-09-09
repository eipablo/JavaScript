function retornaFuncao(){
    const nome = 'pablo'; // a variável nome está no escopo léxico da função que está sendo retornada
    return function(){  
        return nome; // a função retornada tem acesso a variável nome mesmo depois de a função retornaFuncao ter sido finalizada
    }
}

const funcao = retornaFuncao();
console.log(funcao());

//? uma função sabe de quais varáveis pode acessar baseado em onde ela foi escrita no código e não onde ela foi chamada