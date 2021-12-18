const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];

function logArgs() {
    console.log(arguments);
}
logArgs(...arr); //Cada item do array vira um argumento da função

//Criação de Arrays

const arr2 = [...arr, 5, 6, 7];

const arr3 = [...arr2, ...arr, 0, 0, 0];

console.log(arr3);

//Objetos iteraveis -> Construir novos objetos

const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'hello'
}

const objMerged = {
    ...obj,
    ...obj2
}

console.log(objMerged);