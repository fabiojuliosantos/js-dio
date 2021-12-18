var obj = {
    prop1: 'Digital Innovation One'
}

var prop2 = 'DIO';

var obj1 = {
    prop2: prop2
};


//ECMA6

//Sem repetir o nome da propriedade
var prop3 = 'Olá';

var obj2 = {
    prop3
};
console.log(obj, obj1, obj2)

var obj3 = {
    sum(a, b) {
        return a + b;
    }
}

console.log(obj3.sum(1, 5))

var propName = 'test';

var obj4 = {
    [propName + 'concat']: 'prop value'
};

console.log(obj4);