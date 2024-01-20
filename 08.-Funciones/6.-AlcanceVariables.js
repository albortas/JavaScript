
//Alcance Variables
//Variables Globales
let VariableGlobal = 5
var a = 10
//b = 20


//Accedemos a las variables globales
VariableGlobal = 10
console.log(VariableGlobal)

//Definimos una funcion
function miFuncion(variableLocal){
    console.log(variableLocal)
    // Se oculta una variable global
    let a = 30
    console.log(a)
}

miFuncion(VariableGlobal)