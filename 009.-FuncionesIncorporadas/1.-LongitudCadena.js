// Obtener el largo de una cadena
let cadena = "Hola Mundo"
console.log(cadena.length)

//No podemos modificar una cadena en JavaScrip
//Una cadena es inmutable
console.log(cadena[0])
cadena[0] = 'a'
console.log(cadena[0])

cadena = 'Adios'

//Recorremos los elementos de una cadena
for (let i = 0; i < cadena.length; i++) {
    console.log(cadena[i])
}