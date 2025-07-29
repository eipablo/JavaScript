function formataData(data){
    const zeroEsquerda = (num) => (num < 10 ? `0${num}` : num); 
    //* apenas para fixar a arrow function, ela recebe um parametro e o => indica o começo da lógica, ? (se) um num é < 10 então coloca um 0 a esquerda dele : (senão) retorna o número normal

    const dia = zeroEsquerda(data.getDate()); //* recebe o dia da data e armazena na const dia
    const mes = zeroEsquerda(data.getMonth() + 1); //* recebe o mês e soma com + 1 para formatar corretamente
    const ano = zeroEsquerda(data.getFullYear()); //* recebe o ano
    const hora = zeroEsquerda(data.getHours()); //* recebe as horas
    const minuto = zeroEsquerda(data.getMinutes()); //* recebe os minutos
    const segundo = zeroEsquerda(data.getSeconds()); //* recebe os segundos

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`; //* retorna a data formatada no formato brasileiro dd/mm/aaaa hh:mm:ss
}

    const data = formataData(new Date()); //* definindo a data como sendo a data atual e chamando a função dentro da própria variavel
    console.log(data);