//! ================= SPLICE ==============================
const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Pablo', 'Raissa'];

// nomes.splice(indice atual, delete, el1, el2, el3);
//* nomes.splice(0, 2 [vai deletar 2 apartir do indice 0], adiciona elementos)

const removidos = nomes.splice(-2, 2, 'Jessica', 'Bartolomeu');
// const removidos = nomes.splice(0, 1) //* simulando shift
// const removidos = nomes.splice(0, 0, 'Memphis', 'Depay');

console.log(nomes, removidos);

//! ================= CONCATENAÇÃO ==============================

const a1 = [1, 2 ,3];
const a2 = [4, 5, 6];
// const a3 = a1.concat(a2, [7, 8, 9], 'Pablo', 10); //* utilizando concat

const a3 = [...a1, ...a2, 'Pablo', ...[7, 8, 9]]; //* utilizando spread (...x)

console.log(a3)