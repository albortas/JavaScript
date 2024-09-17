"use strict"
try{
    let x = 10;
    throw 'Mi error';
}catch(e){
    console.log(e);
}finally{
    console.log('Termina la revision de errores')
}
console.log('continuamos')