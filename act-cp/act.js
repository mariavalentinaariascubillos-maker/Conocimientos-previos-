class Persona {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }
}
class estudiante extends Persona {
    constructor(nombre, genero, materia, nota) {
        super(nombre, genero); 
        this.materia = materia;
        this.nota = nota;
    }

    
    contraregulares() {
        if (this.nota >= 2.5 && this.nota < 3.5) {
            return 1; 
        } else {
            return 0; 
        }
    }

}
let estudiante1= new estudiante("armando","m","idiomas",2.7);
let resultado = estudiante1.contraregulares();

console.log("Estudiante:", estudiante1.nombre);
console.log("¿Su nota es regular? 1 es si, 0 es nop", resultado);
