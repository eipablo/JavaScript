/* 
* "IF" pode ser utilizado sozinho
* Sempre que utilizo a palavra "ELSE", preciso de um IF no começo da condicional
* Eu posso ter vários "ELSE IF" na checagem
* Só posso ter um "ELSE" e um "IF" na condicional
* Podemos utilizar condicionais sem "ELSE IF"

* Condicionais funcionam com qualquer tipo de dados
* Assim que achar a primeira ação verdadeira ela será executada (apenas 1 vai ser executada)
*/

if (1 === 1){
    console.log ('checagem literalmente inutil');
}

const hora = 0;

if (hora >= 0 && hora < 12){
    console.log('Bom dia');
} else if (hora >= 12 && hora < 18){
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Hora inválida');
}

const dinheiro = false;

if (dinheiro){
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}

console.log('...o restante do código');