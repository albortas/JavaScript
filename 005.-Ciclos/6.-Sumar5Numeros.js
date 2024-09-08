let = minimo = 0, maximo = 5, acumuladorSuma = 0;
for(let numero = 1; numero <= 5; numero++){
    console.log(`${acumuladorSuma} + ${numero} -> ${acumuladorSuma += numero}`)
}

console.log(`La suma de los primeros ${maximo} numeros es: ${acumuladorSuma}`)