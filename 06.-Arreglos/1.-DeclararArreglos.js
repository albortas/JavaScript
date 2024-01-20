//Declaracion de un Arreglo
let numerosArreglo = []

//Modificar los valores de un arreglo
numerosArreglo[0] = 13
numerosArreglo[1] = 21
numerosArreglo[4] = "Hola"

console.log(numerosArreglo)

//Sintaxis simplificada para el manejo de arreglos

let numArreglos = [13, 21, 0, 0, 62]
//let numerosArreglo2 = new Array(13, 21, 0, 0, 62) //Asignando valores
let numArreglos2 = new Array(5) //Se reserva un almacenamiento de memoria de 5 elementos 
for(let i = 0; i < numArreglos.length; i++){
    console.log(`Valor ${i + 1} = ${numArreglos[i]}`)
}
