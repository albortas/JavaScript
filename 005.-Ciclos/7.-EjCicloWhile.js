let numero = 1, maximo = 5, acumuladorSuma = 0;

do{
    console.log(`${acumuladorSuma} + ${numero} -> ${acumuladorSuma += numero}`);
    numero++;
}while(numero <= maximo)
console.log(`La suma de los primeros ${maximo} numeros es: ${acumuladorSuma}`)