const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Karla', 'Lara')
];

function mostrarPersonas(){
    console.log('Mostrar Personas');
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.getNombre} ${persona.getApellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto
}

function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if(nombre.value != '' && apellido.value != ''){
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }else{
        console.log('No hay informacion que agregar')
    }
}