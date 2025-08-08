//* Crie uma função JavaScript que receba uma string s representando um número romano e retorne o número inteiro equivalente.


function romanToInt(s){
    //* mapeando os valores dos simbolos romanos
    const valores = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0; //* criando uma variavel para guardar o total

    for (let i = 0; i < s.length; i++){ //* looping para percorrer os index da string
        const atual = valores[s[i]]; //* pega o valor atual
        const proximo = valores[s[i + 1]] //* verifica o próximo valor

        console.log(`Letra atual: ${s[i]} (${atual})`); //? debugando
        console.log(`Próxima letra: ${s[i + 1] || 'nenhuma'} (${proximo || 0})`); //? debugando

        if (proximo > atual){ //* se o próximo valor for maior que o atual ele subtrai ex: I(1) é menor que V(5) então ele subtrai o total (no caso aqui 10) pela letra atual que representa 1, sendo assim o resultado parcial será 9
            total -= atual;
            console.log(`Subtraindo: -${atual}`);
        } else { //* em casos que a subtração não é necessária ele apenas soma
            total += atual;
            console.log(`Somando: +${atual}`);
        }

        console.log(`Total parcial: ${total}`);
        console.log('----------------------');
    };

    return total;
}

console.log("Resultado final:", romanToInt("XIV"));
