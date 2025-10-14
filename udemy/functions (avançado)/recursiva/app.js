function recursiva(max) {
    console.log(max)
    if (max >= 10) return;
    max++;
    recursiva(max); //* recursividade
}
recursiva(0);

//* existe um limite em quantas vezes a função pode se auto-chamar
//* funções recursivas nada mais são do que funções que se auto-chamam