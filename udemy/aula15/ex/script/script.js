const numero = Number(window.prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

if (Number.isNaN(numero)){ //* define se numero = NaN é verdadeiro
    console.log(`o tipo do input é: NaN`)
}else{
    console.log(`o tipo do input é: ${typeof numero}`);
};
        

numeroTitulo.innerHTML = numero;
texto.innerHTML = 
`
<p>Raiz Quadrada: ${numero ** 0.5}</p>
<p>${numero} é inteiro? <b>${Number.isInteger(numero)}</b></p>
<p>${numero} é NaN? <b>${Number.isNaN(numero)}</b></p>
<p>Arredondado para baixo: ${Math.floor(numero)}</p>
<p>Arredondado para cima: ${Math.ceil(numero)}</p>
<p>Com duas casas decimais: ${numero.toFixed(2)}</p>
`;