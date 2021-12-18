const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbols são únicos
console.log('Symbol1 é igual a Symbol2', symbol1 === symbol2);

//Previnir conflito entre nomes de propriedades
const namesymbol1 = Symbol('Name');
const namesymbol2 = Symbol('Name');

const user = {
    [namesymbol1]: 'Fábio',
    [namesymbol2]: 'Outro nome',
    lastName: 'Júlio dos Santos Silva'
}

console.log(user)

//Symbols criam propriedades que não são enumerables
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`\n Valor da chave ${key}: ${user[key]}`);
    }
}

console.log('Propriedades do object user: ', Object.keys(user));
console.log('Valores das propriedades do object user: ', Object.values(user));

//Exibir symbols de um objeto
console.log('Symbols registrados no object user: ', Object.getOwnPropertySymbols(user));

//Acessando todas as propriedades do objeto
console.log('Todas as propriedades do objeto user: ', Reflect.ownKeys(user));

//Criar um Enum
const directions = {
    UP: Symbol('UP'),
    DOWN: Symbol('DOWN'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
}