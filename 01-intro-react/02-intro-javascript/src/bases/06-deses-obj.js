//desestructuacion
//asignacion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

// const { nombre, edad, clave } = personal;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = ({ clave, nombre, edad, rango = 'Capitan' }) => {

    //console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.2547,
            lng: -12.36578
        }
    }
}


const { nombreClave, anios, latlng: { lat, lng } } = retornaPersona(persona);

console.log(nombreClave, anios, lat, lng);