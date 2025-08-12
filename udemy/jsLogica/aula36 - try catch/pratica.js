function retornaHora(data){
    if (data && !(data instanceof Date)){ //* se a data foi enviada e ela não é uma instancia de Date então executa o erro
        throw new TypeError('Esperando instância de Date');
    }

    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    })
}


try {
    const data = new Date('01-01-1970 12:58:32')
    const hora = retornaHora(data);
    console.log(hora);
} catch (e) {
    console.log('teve um errinho amiguinho');
} finally {
    console.log('tenha um bom dia!');
}