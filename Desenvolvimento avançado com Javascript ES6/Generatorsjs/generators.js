//Generators

function* hello(){
    console.log('Hello');
    yield 1;

    console.log('From');
    yield 2;
    
    console.log('Function');
    yield 3; 
}
    const gen = hello();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function* naturalNumbers(){
    let number = 0;
    while (true){
        yield number;
        number++
    }
}

const number = naturalNumbers();

console.log(number.next());
console.log(number.next());
console.log(number.next());
