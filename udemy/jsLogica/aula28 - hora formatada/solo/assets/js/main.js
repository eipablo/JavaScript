function formataData(data){
    const zeroEsquerda = (num) => (num < 10 ? `0${num}` : num); //* adiciona um zero a esquerda em números abaixo de 10 ex 01

    const diaSemanaArray = [
        "domingo", "segunda-feira", "terça-feira",
        "quarta-feira", "quinta-feira", "sexta-feira", "sábado"
    ]; //* criando uma array com strings para os dias da semana representadas do index 0 até o 6
    const diaSemana = diaSemanaArray[data.getDay()]; //* pega o dia e o mesmo ja representa o index da array ex: 0 = domingo etc
    const diaMes = data.getDate(); //* recebe o dia do mês

    const mesArray = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ]; //* criando uma array com string para os mêses, representados do index 0 até o 11
    const mes = mesArray[data.getMonth()]; //* pega o número do mês de 0 a 11 e o mesmo ja é representado na array acima

    const ano = data.getFullYear(); //* pega o ano inteiro ex 2025
    const hora = zeroEsquerda(data.getHours()); //* horas
    const minuto = zeroEsquerda(data.getMinutes()); //* minutos

    return `${diaSemana}, ${diaMes} de ${mes} de ${ano} às ${hora}:${minuto}`; //* retorna a string que vai ser armazenada em alguma variável futura
}

const dataFormatada = formataData(new Date()); //* armazena o que retorna da função e com new Date() ja alimenta a função com a data atual
document.querySelector('#texto').innerHTML = dataFormatada; //* ja seleciona o id da h1 e com innerHTML = dataFormatada ja coloca toda a formatação de string que fiz com a função formataData
console.log(dataFormatada); //? visualização no console