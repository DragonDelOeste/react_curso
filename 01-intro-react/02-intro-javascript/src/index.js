// Importamos paquete
const bcrypt = require("bcryptjs");
// Primero vamos a hashear la contraseña
const palabraSecretaTextoPlano = "Vr2IjJMRmIaFukeI0gMUxopJAtBrheWFhH7nDccqwHcQLUQuWpjhkqb9uUupH4WC";
// Entre más rondas, mejor protección, pero más consumo de recursos. 10 está bien
const rondasDeSal = 10;

let palabraSecretaEncriptada = '';

bcrypt.hash(palabraSecretaTextoPlano, rondasDeSal, (err, palabraSecretaEncriptada) => {
    if (err) {
        console.log("Error hasheando:", err);
    } else {
        console.log("Y hasheada es: " + palabraSecretaEncriptada);
    }
});

const palabraSecreta = palabraSecretaEncriptada
console.log(palabraSecreta)
//palabraSecretaEncriptada = '$2a$10$NtbdaZf0deD/CE45CeCJh.e3/RqwFTzdJPdM6G6t6ME4/529Ebkrm'

bcrypt.compare(palabraSecretaTextoPlano, palabraSecreta, (err, coinciden) => {
    if (err) {
        console.log("Error comprobando:", err);
    } else {
        console.log(palabraSecreta)
        console.log("¿La contraseña coincide?: " + coinciden);
    }
});