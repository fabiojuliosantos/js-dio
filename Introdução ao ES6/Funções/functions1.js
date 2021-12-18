function fn() {
    return 'Code Here';
}

const arrowFn = () => 'Code Here';
const arrowFn2 = () => {
    //Mais de uma expressão
    return 'Code here';
}

//Funções também são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//Receber e retornar Funções

/*const controlFnExec => fnParam => allowed => {
    if (allowed) {
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true);
handleFnExecution();*/

//ControlFnExec como função
function controlFnExec(fnParam) {
    return function (allowed) {
        if (allowed) {
            fnParam();
        }
    }
}