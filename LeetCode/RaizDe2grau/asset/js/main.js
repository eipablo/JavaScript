const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e){
    e.preventDefault(); // vai retirar o comportamento padrão do formulário

    const inputPeso = e.target.querySelector('#input-peso'); // o evento target vai procurar dentro do form
    const InputAltura = e.target.querySelector('#input-altura');
    // depois de selecionar o form e os inputs vamos fazer a conversão para number 

    const peso = Number(inputPeso.value); // .value vai pegar o valor digitado no input e retornar como string
    const altura = Number(InputAltura.value); // e Number converte para number 

    // vamos fazer agora a validação se o que foi digitado foi um número ou não
    if (!peso && !altura){
        setResultado('Peso e Altura inválidos', false);
        return;    
    }

    if (!peso){ // se peso for falso
        setResultado('Peso inválido', false);
        return; // faz com que a função pare aqui
    }

    if (!altura){
        setResultado('Altura inválida', false);
        return
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`;

    setResultado(msg, true);
});

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP (){
    const p = document.createElement('p')
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP()

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}