// Declarammos una Matriz
//Sintaxis simplificada

let matriz = [[100, 200, 300],[400, 500, 600]]

//let matriz = [[],[]]
//Modificamos los valores de una matriz
/* matriz[0][0] = 100
matriz[0][1] = 200
matriz[0][2] = 300
matriz[1][0] = 400
matriz[1][1] = 500
matriz[1][2] = 600 */


//Mostramos por pantalla
console.log(matriz.length) //largo de reglones
console.log(matriz[0].length) //largo de columnas

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[1].length; j++){
        console.log(`Valor [${i}][${j}] = ${matriz[i][j]}`)
    }
}