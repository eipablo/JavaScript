function criaCalculadora() {
//* tudo que eu criar aqui dentro meu objeto terá acesso 
//* sempre que eu referêrenciar uma chave do meu objeto preciso do this
    return {
        display: document.querySelector('.display'), //? selecionando o display (input da calculadora)

        inicia(){ //? iniciando calculadora
            this.cliqueBotoes();
            this.pressEnter();
        },
        //* metodos abaixo, atributos acima

        pressEnter(){
            document.addEventListener('keypress', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1) //* slice (inico, fim), ou seja, vai pegar a ultima letra digitada
        },

        realizaConta(){
            let conta = this.display.value;

            try {
                conta = eval(conta) //* eval vai tentar fazer a conta com o que tem disponivel, mas não é mt confiável

                if (!conta){ //* verificando se a conta é válida
                    alert('conta inválida')
                    return;
                }

            this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida');
                return;
            }
        },


        cliqueBotoes(){ //? pegando evento de clique
            //? this -> calculadora
            document.addEventListener('click', e => {
                
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);

                }

                if (el.classList.contains('btn-clear')){
                this.clearDisplay();
                }

                if (el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')){
                    this.realizaConta();
                }

            }) //? caso eu não esteja utilizando arrow function posso adicionar ao final .bind(this) que o this começará a ser quem chamou o objeto
            
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }

    }; 
}

const calculadora = criaCalculadora();
calculadora.inicia(); //* this é a calculadora, ela criou o objeto
//! CASO EU UTILIZE ARROW FUNCTION O THIS NUNCA VAI MUDAR O COMPORTAMENTO E SEMPRE SERÁ QUEM CRIOU O OBJETO
//! PORÉM CASO EU PRECISE USAR O DOCUMENT COMO THIS EU NÃO DEVO UTILIZAR ARROW FUNCTION