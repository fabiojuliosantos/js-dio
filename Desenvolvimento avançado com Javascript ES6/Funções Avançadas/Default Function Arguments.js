function multiply(a, b = 1) { // Valor definido para quando a variável estiver 'undefined'
    //b = typeof b === 'undefined' ? 1 : b;
    return a * b;
}

console.log(multiply(5, undefined));

//Lazy Evaluation -> evoca a função quando a outra função é evocada sem parâmetro
function randomNumber() {
    console.log('Generating a random number...')
    return (Math.random() * 10);
}

function mult(a1, b1 = randomNumber()) {
    return a1 + b1;
}
console.log(mult(4).toFixed(2))

console.log(randomNumber())
console.log(randomNumber())