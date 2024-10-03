class Persona{
    private nombre:string;
    constructor(nombre:string){
        this.nombre = nombre;
    }
    getNombre():string{
        return this.nombre;
    }
}

let persona = new Persona('Juan');
console.log(persona.getNombre());