/*Currying => Transformar uma função com "n" parâmetros em apenas uma função 
que recebe um parâmetro e para cada parâmtro retorna uma nova função


function soma(a, b) {
    return a + b
} => Função original, já que o termo "a" sempre é igual a 2 nessa função, vamos utilizar o currying
para setá-lo dentro da função. De modo que ele permaneça o mesmo durante a execução da função
independente de "b"*/
function soma(a) {
    return function (b) {
        return a + b
    }
}

const soma2 =  soma(2) //O valor 2 agora é uma constante na função.

console.log(soma2(3));
console.log(soma2(6));
console.log(soma2(7));
console.log(soma2(9));