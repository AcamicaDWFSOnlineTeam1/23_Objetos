let arrelgoPerros = [];
let arregloPerrosEnAdopcion = [];
let arregloPerrosEnProcesoDeAdopcion = [];
let arregloPerrosAdoptados = [];

let flag = 1;

class Perrera {
    constructor(raza, genero, edad, estadoAdopcion) {
        this.raza = raza;
        this.genero = genero;
        this.edad = edad;
        this.estadoAdopcion = estadoAdopcion;
    }

    setEstadoAdopcion(estadoAdopcion) {
        this.estadoAdopcion = estadoAdopcion;
    }

    getEstadoAdopcion() {
        return this.estadoAdopcion;
    }
}

while (flag == 1) {

    let laRaza = prompt('Diga la raza del Perro');
    let elGenero = prompt('Diga el género del Perro');
    let laEdad = prompt('Diga la edad del Perro');
    let estadodeAdopcion = prompt('Diga el estado de adopción del Perro');

    let perro = new Perrera(laRaza, elGenero, laEdad, estadodeAdopcion);
    console.log(perro);

    arrelgoPerros.push(perro);
    if (!window.confirm("¿Quiere inscribir otro perro?")) {
        flag = 0;
    }
}
console.table(arrelgoPerros);

for (let index = 0; index < arrelgoPerros.length; index += 1) {
    if (arrelgoPerros[index].getEstadoAdopcion() == "En adopción") {
        arregloPerrosEnAdopcion.push(arrelgoPerros[index]);
    } else if (arrelgoPerros[index].getEstadoAdopcion() == "En proceso de adopción") {
        arregloPerrosEnProcesoDeAdopcion.push(arrelgoPerros[index]);
    } else if (arrelgoPerros[index].getEstadoAdopcion() == "Adoptado") {
        arregloPerrosAdoptados.push(arrelgoPerros[index]);
    }
}

console.table(arregloPerrosEnAdopcion);
console.table(arregloPerrosEnProcesoDeAdopcion);
console.table(arregloPerrosAdoptados);




/* let perritos1 = new Perrera[captura];
console.log(perritos1); */

/* let perritos2 = new Perrera('Boxer', 'macho', 15, 'Adoptado');
console.log(perritos2);

console.log(perritos1.setEstadoAdopcion('Proceso de adopción'));
console.log(perritos2.getEstadoAdopcion());

console.log(perritos1); */
