function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressEnter();
    };

    this.pressEnter = () => {
        document.addEventListener('keypress', e => {
            if (e.key === "Enter") {
                this.realizaConta();
            }
        });
    };

    this.clearDisplay = () => {
        this.display.value = '';
    };

    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1)
    };

    this.btnParaDisplay = (v) => {
        this.display.value += v;
    }

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if (!conta) {
                this.showAlert('Conta Inválida');
                return;
            }
            this.display.value = String(conta);
        } catch (e) {
            this.showAlert('Conta Inválida');
            return;
        }
    };

    this.showAlert = (message) => {
        const alertBox = document.getElementById('custom-alert');
        const alertMsg = document.getElementById('alert-message');
        const alertClose = document.getElementById('alert-close');

        alertMsg.innerText = message;
        alertBox.classList.add('show');

        alertClose.onclick = () => {
            alertBox.classList.remove('show');
        };
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                this.apagaUm();
            }

            if (el.classList.contains('btn-eq')) {
                this.realizaConta();
            }

        })
    };


}

const calculadora = new Calculadora();
calculadora.inicia();