//! Factory function (função fábrica)
function criaPessoa(nome, sobrenome, altura = 0, peso = 0){
    return{
        nome,
        sobrenome,

        //* Getter finge ser um atributo 
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        //* Setter atribui um valor a um atributo
        set nomeCompleto(valor){
            valor = valor.split(' '); //* separa em uma array baseada no espaçamento
            //* ou seja, a cada espaço, ele cria um novo índice na array

            this.nome = valor.shift(); //* shift remove o primeiro elemento da array e retorna ele
            this.sobrenome = valor.join(' '); //* join junta todos os elementos da array em uma string, usando o que for passado como parâmetro para separar os elementos
            
        },

        fala(assunto = 'nada'){
            return `${this.nome} está falando sobre ${assunto}`
        },

        altura,
        peso,

        //* Getters são acessados como propriedades
        get imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2);
        }
    }
}
//* funções dentro de objetos são chamadas de métodos

//* quando falamos this.nome é a mesma coisa de estar falando p1.nome
//* this sempre vai fazer referência ao objeto que está chamando o método

const p1 = criaPessoa('Pablo Vinícius', 'Silva Souza', 1.88, 73);
const p2 = criaPessoa('Cirilo', 'Gomes', 1.70, 70);

p1.nomeCompleto = 'Raissa Monteiro Duarte';
console.log(`${p1.nome} ${p1.sobrenome}`);
console.log(p1.fala());