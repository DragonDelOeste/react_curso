const nombre = 'Marco';
const apellido = 'Liberona';

const nombreCompleto = `${nombre} ${apellido} ${1 + 1}`;
console.log(nombreCompleto);

function getSaludo() {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${(getSaludo())}`);