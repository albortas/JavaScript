//En JavaScript los tipod objeto o array se pasa la referencia del objeto
function cambiarValor(parametro){
    parametro[0] = 400
    parametro[1] = 500
    parametro[2] = 600
}

let argumento = [100,200,300];
console.log(`Antes de llamar a la funcion: ${argumento}`)
cambiarValor(argumento)
console.log(`Despues de llamar a la funcion: ${argumento}`)
