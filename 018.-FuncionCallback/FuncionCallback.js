//Funcion de tipo callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1,op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5, 6, imprimir);

//LLamadas asincronas con uso setTimeout
function miFuncionCallback(){
    console.log('Saludos asincrono despues de 3 seg')
}

setTimeout(miFuncionCallback, 3000); //despues de 3 segundos
setTimeout(function(){ console.log('saludo asincrono 2')}, 4000);
setTimeout( () => console.log('saludo asincrono 3'),1000 )