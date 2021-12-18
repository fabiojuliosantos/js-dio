var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var Apple = arr[0];
var Banana = arr[1];
var Orange = arr[2];
var Tomato = arr[3][0];

//Destructuring Assignment

var [Apple1, Banana1, Laranja1, Tomato1] = ['Apple', 'Banana', 'Orange', ['Tomato']];

console.log(Tomato, Tomato1);

var obj = {
    name: 'Celso',
    props: {
        age: 26,
        favcolors: ['black', 'purple']
    }
};

var {
    props: { age: age2, favcolors: [color1, color2] } } = obj;

console.log(color1)

//Functions

function sum([a, b]) {
    return a + b
}

console.log(sum([5, 5]))