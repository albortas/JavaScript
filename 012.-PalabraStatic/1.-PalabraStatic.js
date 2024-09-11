class Persona{

    static contadorObjetosPersona = 0;

    email = "Valor por defaulf";

    constructor(nombre, apellido){
        Persona.contadorObjetosPersona++
        this._nombre = nombre;
        this._apellido = apellido;
        console.log("Se incrementa el contador: " + Persona.contadorObjetosPersona);
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }
    //Estos sobreescribiendo el meto de la clase padre
    toString(){
        //Se aplica polimorfismo
        return this.nombreCompleto();
    }

    static saludar(){
        console.log("Saludos desde el Metodo Static");
    }

    static saludar2(persona){
        console.log(persona.nombre);
    }
}

class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ", " + this._departamento
    }
}


let persona1 = new Persona("Juan", "Perez");
console.log(persona1.toString());
console.log(persona1);

let empleado1 = new Empleado("Maria", "Jimenez", "Sistemas");
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());

//Nos es posible llamar un Método estatico desde un objeto
//persona1.saludar();
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(Persona.contadorObjetosPersona);