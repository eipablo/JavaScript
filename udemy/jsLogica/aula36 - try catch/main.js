// try {
//     console.log(souinexistente);
// } catch (err){
//     console.log('Ocorreu um erro desconhecido');
// }

function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números');
        // throw new ReferenceError('x e y precisam ser números'); //? também pode ser utilizado assim como os outros tipos de error do JavaScript
    }
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('a', 2)); //* se não ocorrer nenhum erro no bloco try o catch não será iniciado
} catch (err){
    // console.log(err)
    console.log('uma mensagem mais amigável para o usuário')
}