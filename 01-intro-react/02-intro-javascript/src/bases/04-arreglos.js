//Arreglos en JS

//const arreglo = new Array();
const arreglo = [1, 2, 3, 4]
console.log(arreglo);
//arreglo.push(1) no se utiliza push

let arreglo2 = [...arreglo, 5];
let arreglo3 = arreglo2.map(function (a) {
    return a * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);