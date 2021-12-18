function log(value) { //Padrão de função
    console.log(value);
}
log('Teste')

var log1 = function (value1) { //Função Anônima
    console.log(value1);
}
log1('Olá')

function sumOld(a, b) {
    return a + b
}

console.log(sumOld(4, 11))

//Arrow Functions

var sum = (a, b) => a + b; //Return implícito
console.log(sum(7, 8))

/*Sempre que for necessário statemants, é obrigatório usar {}*/

//Se existir um argumento apenas, pode-se omitir os  ()

var sub = a => a - 4;
console.log(sub(10))

//Objetos literais

var createObj = () => ({ test: 12 });
console.log(createObj());

//Funções construtoras -> não é possível criar com Arrow Functions

function Car() {
    this.foo = 'bar'
}
console.log(new Car())

//Hoisting

/* log2('teste')
var log2 = value2 => {
    console.log(value2)
} -> Hoisting não funciona com Arrow Function*/

//Escrita mais enxuta de funções

var obj = {
    showContext: function showContext() {
        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};
obj.showContext();

//Arrow function possui contexto igual ao código que o envolve.