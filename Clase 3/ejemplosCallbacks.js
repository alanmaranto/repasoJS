/*Crear una funcion de orden superior que reciba como argumento un mensaje y un callback y que este se pase como
argumento. La funcion debe mostrar el mensaje en un console.log o console.warn*/

let ordenSuperior = (mensaje, callback) => {
    callback(mensaje);
  }
  
  let imprimirWarn = (mensaje) => {
    console.warn(mensaje);
  }
  
  let imprimirLog = (mensaje) => {
    console.log(mensaje);
  }
  
  ordenSuperior('Este mensaje va en un console.log', imprimirLog)
  ordenSuperior('Este mensaje va en un console.warn', imprimirWarn)

/* Crear una funcion de orden superior que reciba como argumentos dos numeros y un callback. Segiun el callback 
que se pase a la función, se devolverá la suma de los dos numeros, la resta de los dos numeros o la multiplicación
de los dos numeros*/

let hacerOperacion = (num1, num2, operacion) => {
    return console.log(operacion(num1, num2))
}

let suma = (num1, num2) => {
    return num1 + num2;
}

let resta = (num1, num2) => {
    return num1 - num2;
}

let multiplicar = (num1, num2) => {
    return num1 * num2;
}

hacerOperacion(5,5, suma);
hacerOperacion(5,3, resta);
hacerOperacion(5,7, multiplicar);

// ECMA5
function hacerOperacion (num1, num2, operacion) {
    return operacion(num1, num2)
}

function suma (num1, num2) {
    return num1 + num2;
}

function resta (num1, num2){
    return num1 - num2;
}

function multiplicar (num1, num2) {
    return num1 * num2;
}

console.log(hacerOperacion(5,5, suma));
console.log(hacerOperacion(5,3, resta));
console.log(hacerOperacion(5,7, multiplicar));

/*  Hacer un arreglo de 4 cantidades de tiempo en minutos EJEMPLO[120, 80, 200, 100] y tomar solo las 
cantidades mayores a dos horas (hacer la comparación en horas) mediante un callbck*/

const mayorQueDosHoras = (arreglo, callback) => {
    return callback(arreglo);
}

function compararHoras(arreglo) {

    let nuevoArreglo = [];

    for (let i=0; i<arreglo.length; i++){
        if (arreglo[i] >121) {
            nuevoArreglo.push(arreglo[i])
        }
    }
    return nuevoArreglo;
}

const arregloFinal = mayorQueDosHoras([300, 122, 50, 40], compararHoras);
console.log(arregloFinal);
