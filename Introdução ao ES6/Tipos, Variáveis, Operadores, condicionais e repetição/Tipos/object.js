let user = {
    name: 'Fábio'
};

//Alterando a propriedade do object
user.name = 'Outro nome 1';
user['name'] = 'Outro nome 2';

const prop = 'name';
user[prop] = 'Outro nome 3';

//Criando uma propriedade 
user.lastName = 'Júlio dos Santos Silva';

//Deletando uma propriedade
delete user.name;