
//Las cadenas se condideran un tipo primitivo en javascript
function cambiarValor(parametro){
    parametro = 'Adios'
}

let argumento = 'Hola';
console.log(`Antes de llamar a la funcion: ${argumento}`)
cambiarValor(argumento)
console.log(`Despues de llamar a la funcion: ${argumento}`)