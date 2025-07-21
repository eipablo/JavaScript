let a = 'A';  //! valores imutáveis string, number, boolean, undefined, null -> dados copiádos
let b = a; //* está copiando o valor de A porém não está olhando para o mesmo local na memória

a = 'C'; //* modificando o valor de A
console.log(a, b); //* agora será exibido C, A

let a2 = [1, 2, 3]; //! valores mutáveis, array, object e function -> dados passados por referência
let b2 = a2; //* está apontando para o mesmo local na memória, logo qlq alteração também o afetará
let c = [...a2]; //* fazendo este operador eu estou copiando e não referênciando, o que torna a array c independente

a2.push(4); //* adicionando 4 ao final da array a2
console.log(a2, b2, c) //* será exibido a mesma coisa para ambos

b2.pop();
c.pop()
console.log(a2, b2, c) //* como a2 e b2 estão apontando para o mesmo local na memória o b2.pop() vai afetar ambos