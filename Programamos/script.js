class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    
    fullName() {
        //return this.nombre + ' ' + this.apellido;
        return `${this.nombre} ${this.apellido}`;
    }

    esMayor() {
        let mayorEdad = false;
        if (this.edad >= 18) {
            mayorEdad = true;
        }
        return mayorEdad;
    }
}

let juanPerez = new Persona('Juan', 'Perez', 19);
console.log(juanPerez);

let airanFranco = new Persona('Airan', 'Franco', 15);
console.log(airanFranco);

console.log(juanPerez.fullName());
console.log(juanPerez.esMayor());

console.log(airanFranco.fullName());
console.log(airanFranco.esMayor());



