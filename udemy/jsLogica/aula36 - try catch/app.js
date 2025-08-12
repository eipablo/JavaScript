try{
    //* é executada quando não há erros
    console.log('TRY: abri um arquivo');
    console.log('TRY: manipulando o arquivo...');
    console.log(ERRO);
    console.log('TRY: fechei o arquivo');
} catch (error){
    //* é executada quando há erros
    console.log('Catch: tratando o erro....');
} finally {
    //* sempre é executada
    console.log('Finally: fechando o arquivo (eu sempre sou executado)');
}