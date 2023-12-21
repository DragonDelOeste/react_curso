const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciuidad: 'New York',
        zip: 524862318,
        lat: 78.2285741,
        lng: 36.5488232
    }
};

console.log({ persona });


//console.table({ persona });

const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);