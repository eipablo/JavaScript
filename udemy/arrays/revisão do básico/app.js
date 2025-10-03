// //* valor por referência
                //  0         1        2       3
const nomes = ['Eduardo', 'Mônica', 'João', 'Maria'];
// const novo = [...nomes];

// const removido = novo.pop(); //* agora além de retirar o ultimo valor do array ele vai adicionar a const removido
// //* lembrando que também temos o shift() que remove o primeiro elemento e desloca os demais

// console.log(nomes);
// console.log(novo, removido);

// console.log(nomes.length)


const lista = ['Pablo', 'Raissa', 'Darly'];
const teste = nomes;
for(i = 0; i < lista.length; i++) {
    const nome = lista[i];
    teste.push(nome)
}

console.log(teste)
// console.log(teste.slice(0, -1))

const string1 = 'Vinícius Silva Souza'; 
const teste2 = string1.split(' '); //* fazendo uma string virar um array
console.log(teste2);

const array1 = teste2;
const teste3 = array1.join(' '); //* fazendo o array virar uma string
console.log(teste3)