//Retorna o tamanho de uma string
const textsize = 'Texto'.length
console.log(`Quantidade de letras: ${textsize}` )

//Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('X');
console.log('\nArray com as posições separadas pelo delimitador ', splittedText);

// Busca um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'tExt');
console.log('\n Substituição de valor: ', replacedText);

// Retorna a "fatia" de um valor
const lastChar ="Texto".slice(-1);
console.log("\n Última letra de uma string: ", lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\n Valor da String da primeira letra menos a úlitma: ', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log("\n Valor da string da segunda letra até a última: ", secondToEnd)

// Retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0 ,2);
console.log("\n As duas letras primeiras letras são: ", twoCharsBeforeFirstPos);