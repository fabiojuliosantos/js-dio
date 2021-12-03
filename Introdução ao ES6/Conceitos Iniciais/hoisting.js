/* Hoisting => Levantar/suspender. Comportamento que ocorre em JavaScript em declarações de variáveis
e funções. As declarações são elevadas ao escopo de onde ela está.
*/

function fn() {
    console.log(text);

    var text = 'Exemplo';

    console.log(text)
}

fn();

function fn1(){
    log('Hoisting de Função');

    function log(value){
    console.log(value)}
}

fn1()