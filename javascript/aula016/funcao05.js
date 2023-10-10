//RECURSIVIDADE
function fatorial(numParametro) {
    if (numParametro == 1) {
        return 1
    } else {
    return numParametro * fatorial(numParametro-1)
    }
}

console.log(fatorial(5))


/* Nesse estilo, a função chama ela pra dentro dela mesma - isso é recursividade 

Esse código advém da lógica de que o fatorial de um número é ele x o fatorial do número anterior a ele, ex:

O fatorial de 5 = 5 * !4
!4 = 4 * !3

Então, por isso que no código, há o calculo numParametro * fatorial(numParametro-1), que é o valor do parametro x o valor do mesmo parametro - 1 (decrescendo)*/