//* Let tem escopo de bloco {... bloco}
//* Var tem escopo de função
//* var é redeclarável, let não!
//* uma função pode acessar variáveis fora dela, porém não podemos acessar variáveis dentro da função fora da mesma
//* também não podemos utilizar uma variável LET fora de blocos ex se criamos uma variavel dentro de um if não podemos usar ela fora

const verdadeiro = true;

let nome = 'Pablo'; //* criando dentro do escopo global
var nome2 = 'Vinícius'; //* criando Var

if (verdadeiro){
    let nome = 'Silva'; //* criando dentro do bloco if
    // console.log(nome, nome2)
    
    if(verdadeiro){
        let nome = 'Roger'; //* criando dnv
        var nome2 = 'Batuta'; //* redeclarando Var
    }
}
console.log(nome, nome2) //* ele vai buscar a variavel nome no bloco mais próximo, caso não esteja nesse vai ser no anterior e assim sucessivamente 