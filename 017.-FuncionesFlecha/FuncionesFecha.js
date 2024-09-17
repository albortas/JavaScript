function miFuncion(){
    console.log('Saludos desde mi funcion');
}
//Otra forma de hacer una funcion
let miFuncion1 = function(){
    console.log('Saludos desde mi funcion1');    
}

//Funcion Flecha hosting no se puede
let miFuncion2 = () =>{
    console.log('Saludos desde mi funcion2');   
}

//Const ya no se puede modificar la funcion al contraio de let q si se puede modificar
const miFuncion3 = () =>{
    console.log('Saludos desde mi funcion2');   
}
  
const miFuncionFlecha = () => console.log('Saludos desde mi funcion flecha'); 

const saludar = () =>{
    return "Saludos desde funcion flecha"
}

const saludar1 = () => "Saludos desde funcion flecha 1";

const regresaObjetos = () => ({nombre: 'Juan', apellido: 'Lara'})

console.log(regresaObjetos());

const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros('Saludos con parametros');