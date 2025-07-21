function meuEscopo() {

    const form = document.querySelector('.form'); //* selecionando o formulário com a class form
    const resultado = document.querySelector('.resultado'); //* selecionando a div class resultado

    const pessoas = []; //* criando array pessoas


    function recebeEventoForm (evento){
        evento.preventDefault(); //* removendo o comportamento padrão do navegador

        const nome = form.querySelector('.nome'); //* selecionando input com class nome
        const sobrenome = form.querySelector('.sobrenome'); //* selecionando input com class sobrenome
        const peso = form.querySelector('.peso'); //* selecionando input com class peso
        const altura = form.querySelector('.altura'); //* selecionando input com class altura

        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        }; //* criando o objeto pessoas para guardar os valores recebidos dos formulários selecionados

        pessoas.push(pessoa); //* adicionando o objeto a array pessoas[]
        console.log(pessoas); //* acessando

        resultado.innerHTML += `
        <p> ${pessoa.nome} ${pessoa.sobrenome} ${pessoa.peso} ${pessoa.altura} </p>
        ` //* utilizando a expressão de concatenação pois não quero que uma segunda execução exclua a anterior
    };

    form.addEventListener('submit', recebeEventoForm); //! o evento recebeEventoForm() linha 9 só será executado ao dar submit no form
}

meuEscopo();