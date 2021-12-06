num = 15.870;

//Transformar number em string
const numtostring = num.toString();
console.log("Número transformado em string: ", typeof numtostring);

//Retorna número com um número específico de casas decimais
const fixedtwodecimals = num.toFixed(2);
console.log("Número com duas casas decimais: ", fixedtwodecimals);

//Transforma uma string em float
console.log('\nString parseada para float: ', parseFloat('13.22'));

// Transforma uma string em int
console.log("\nString parseada para inteiro: ", parseInt('13.20'));