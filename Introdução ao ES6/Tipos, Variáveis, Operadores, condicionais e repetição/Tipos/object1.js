let user = {
    name: 'Fábio',
    lastname: 'Júlio dos Santos Silva'
};

//Recupera as chaves do objeto
console.log('Propriedades do object user: ', Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\n Valores das propriedades do object user: ', Object.values(user));

//Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\n Lista de propriedades do object user: ', Object.entries(user));

//Mergear propriedades de objetos
Object.assign(user, { fullName: 'Fábio Júlio dos Santos Silva' })

console.log('\n Adiciona a propriedade fullName no object user', user);
console.log('\n Retorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, { age: 25 }));

//Previne todas as alterações em um objeto
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;

//Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Fábio' };
Object.seal(person);

person.name = 'Fábio Júlio';
delete person.name;
person.age = 25;

console.log('\n Variável person após as alterações: ', person);