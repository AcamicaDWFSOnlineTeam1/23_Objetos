let personas = [
    {
        nombre: "Jhony",
        asistente: null,
        seccion: "gold",
        rol: "speaker"
    },
    {
        nombre: "Manuel",
        asistente: true,
        seccion: "vip",
        rol: "viewer"
    },
    {
        nombre: "Fran",
        asistente: true,
        seccion: "vip",
        rol: "viewer"
    },
    {
        nombre: "Cintia",
        seccion: "platino",
        rol: "viewer"
    },
    {
        nombre: "Marcos",
        asistente: null,
        seccion: "gold",
        rol: "viewer"
    },
    {
        nombre: "Victoria",
        asistente: true,
        seccion: "platino",
        rol: "speaker"
    }
];

let cantidadAsistentes = 0;
let listaDeAsistentes = [];
let asistentesPlatino = [];
let listaFiltrada = [];

function asistentes(listaPersonas) {
    /**
     * Esta fución debe calcular el total de asistentes
     * según una lista de personas.
     *
     * Se considera que una persona esta "asistente" si
     * la propiedad respectiva es distinta a null y undefined
     *
     * La función debe retornar el número de asistencias.
     */
    let cantidadCampos = listaPersonas.length;

    for (let index = 0; index < cantidadCampos; index += 1) {
        if (listaPersonas[index].asistente) {
            cantidadAsistentes += 1;
        }
    }
    return cantidadAsistentes;
}

function listaAsistentes(listaPersonas) {
    let cantidadCampos = listaPersonas.length;
    for (let index = 0; index < cantidadCampos; index += 1) {
        if (listaPersonas[index].asistente) {
            listaDeAsistentes.push(listaPersonas[index]);
        }
    }
    return listaDeAsistentes;
}


function tipoSeccion(listaPersonas) {
    let cantidadCampos = listaPersonas.length;
    for (let index = 0; index < cantidadCampos; index += 1) {
        if (listaPersonas[index].seccion == 'platino') {
            asistentesPlatino.push(listaPersonas[index]);
        }
    }
    return asistentesPlatino;
}

function filtrarPersonas(listaPersonas, caracteristica, campo) {
    let cantidadCampos = listaPersonas.length;
    for (let index = 0; index < cantidadCampos; index += 1) {
        if (caracteristica == "nombre") {
            if (listaPersonas[index].nombre == campo) {
                listaFiltrada.push(listaPersonas[index]);
            }
        } else if (caracteristica == "asistente") {
            if (listaPersonas[index].asistente == campo) {
                listaFiltrada.push(listaPersonas[index]);
            }
        } else if (caracteristica == "seccion") {
            if (listaPersonas[index].seccion == campo) {
                listaFiltrada.push(listaPersonas[index]);
            }
        } else if (caracteristica == "rol") {
            if (listaPersonas[index].rol == campo) {
                listaFiltrada.push(listaPersonas[index]);
            }
        }

    }
    return listaFiltrada;
}


let totalAsistentes = asistentes(personas);
console.log('El total de asistentes es: ' + totalAsistentes); // debe ser 3

let laListaDeAsistentes = listaAsistentes(personas);
console.log(laListaDeAsistentes);

let laListaDeAsistentesPlatino = tipoSeccion(personas);
console.log(laListaDeAsistentesPlatino);

let speakers = filtrarPersonas(personas, "rol", "speaker");
console.log(speakers);

