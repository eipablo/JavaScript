/*
? OPERADORES LÓGICOS
* && = AND -> E === Todas as expressões precisam ser verdadeiras para dar true
! ex: 
? true && true // true
? true && false // false
? false && true // false
? false && false // false
! Também retorna o primeiro valor "falsy" encontrado, ou o último valor se todos forem "truthy".
? 'Texto' && 123 && true // true (todos são truthy → retorna o último)
? 0 && 'Texto' && true // 0 (0 é falsy → retorna ele)

* || = OR -> OU === Retorna true se PELO MENOS UMA condição for verdadeira.
! ex: 
? true || false // true
? false || false // false
! Também retorna o primeiro valor "truthy" encontrado.
? 0 || null || 'oi' || 123 // 'oi'
? false || 0 || null // null (todos são falsy → retorna o último)

* ! -> NOT -> NÃO === inverte uma expressão exemplo !false é igual a true
? !true // false
? !false // true
? !0 // true (porque 0 é falsy)
? !'' // true (string vazia é falsy)
? !123 // false (número é truthy)


* Avaliações com todos os valores verdadeiros, o último valor é retornado.
* Avaliações com qualquer valor falso (em qualquer posição) o primeiro valor falso encontrado é retornado.
*/

/*
? Avaliação de curto circuito 

* False -> valor literal
! Falsy {
* 0
* ' ' ` ` " " (strings vazias)
* Null / Undefined
* NaN 
! } 
? qualquer coisa que não está categorizado acima é avaliado como TRUE em JavaScript
! ex: 
* 'Texto'
* 123
* []
* {}
* function() {}
*/

console.log(0 || NaN || undefined || '' || null || 'valeu' || 'outro');