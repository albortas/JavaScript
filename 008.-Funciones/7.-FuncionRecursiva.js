//Funciones Recursiva

let numero = 5

function funcionRecursiva(numero){
    //Caso Base
    if (numero == 1)
        console.log(numero)
    //Caso Recursiva
    else{
        funcionRecursiva(numero - 1)
        console.log(numero)
    }
}

//Llamamos la funcion
funcionRecursiva(numero)