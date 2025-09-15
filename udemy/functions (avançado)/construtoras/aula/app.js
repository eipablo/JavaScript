//* Função construtora -> objetos
//* Função fabrica -> objetos
//* Construtora -> new Pessoa é o molde
//* começar com letra maiuscula para lembra que é uma função construtora
//* dentro de uma função construtora, se você quer criar métodos que tenham acesso ao objeto inteiro, você precisa usar 'this'

function Pessoa(nome, sobrenome){
    

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(`${this.nome} sou um metodo`);
    };
}

const p1 = new Pessoa('Pablo', 'Vinícius');
const p2 = new Pessoa ('Raissa', 'Monteiro');

