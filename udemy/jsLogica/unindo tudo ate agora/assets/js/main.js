function meuEscopo() {

  const form = document.querySelector('#form');
  const resultado = document.querySelector('#resultado');


    function recebeEventoForm(evento){
        evento.preventDefault(); //? removendo o comportamento padrão do navegador

        const pesoInput = form.querySelector('#input-peso'); //? recebendo os dados do form
        const alturaInput = form.querySelector('#input-altura'); //? recebendo os dados do form

        const peso = Number(pesoInput.value); //? convertendo para Number
        const altura = Number(alturaInput.value); //? convertendo para Number

        console.log(`Valor de peso: ${peso} | Valor de altura: ${altura}`); //? debuggando
        console.log(`Peso é NaN? ${isNaN(peso)} | Altura é NaN? ${isNaN(altura)}`); //? debuggando

        
        if (isNaN(peso) && isNaN(altura)){ //* se o peso e a altura forem inválidas
            resultado.innerHTML = `<p class="erro">PESO E ALTURA INVÁLIDOS!</p>`;
            console.log('Operação encerrada por erro no valor digitado em PESO e ALTURA')
            return;
        } else if(isNaN(peso)) { //* se o peso for inválido
            resultado.innerHTML = `<p class="erro">PESO INVÁLIDO!</p>`;
            console.log('Operação encerrada por erro no valor digitado em PESO')
            return;
        } else if (isNaN(altura)){ //* se a altura for inválida
            resultado.innerHTML = `<p class="erro">ALTURA INVÁLIDA!</p>`;
            console.log('Operação encerrada por erro no valor digitado em ALTURA')
            return;
        }

        let imc = peso / (altura * altura); //? calculo imc
        imc = imc.toFixed(2); //? formatando imc com 2 casas decimais

        console.log(`imc resultado ${imc}`); //? debugg

        if (imc < 18.5){ //* condicional resultados
            resultado.innerHTML = `<p class="resul">Seu IMC é ${imc} (Abaixo do peso)</p>`;
        } else if (imc >= 18.5 && imc <= 24.9){
            resultado.innerHTML = `<p class="resul">Seu IMC é ${imc} (Peso ideal)</p>`;
        } else if (imc >= 25 && imc <= 29.9){
            resultado.innerHTML = `<p class="resul">Seu IMC é ${imc} (Acima do peso)</p>`;
        } else if (imc >= 30 && imc <= 34.9){
            resultado.innerHTML = `<p class="resul">Seu IMC é ${imc} (Obesidade grau 1)</p>`;
        } else if (imc >= 35 && imc <= 39.9){
            resultado.innerHTML = `<p class="resul">Seu IMC é ${imc} (Obesidade grau 2)</p>`;
        } else if (imc >= 40){
            resultado.innerHTML = `<p class="resul">Seu IMC é ${imc} (obesidade grau 3)</p>`;
        } 
    };

  form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();