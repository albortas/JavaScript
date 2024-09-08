//Paso por Valor

function cambiarValor(parametro){
    parametro = 20
}

let argumento = 10;
console.log(`Antes de llamar a la funcion: ${argumento}`)
cambiarValor(argumento)
console.log(`Despues de llamar a la funcion: ${argumento}`)

