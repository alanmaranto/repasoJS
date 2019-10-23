// Variables
const string = 'Hola mundo'; //const --> nunca va a cambiar su valor

let entero = 63; // let-> Solo se puede usar en el scope creado

var flotante = 7485.38 // var -> Se usa de manera global

const booleano = false; 

console.log(string)
console.log(entero)
console.log(flotante)
console.log(booleano)
    
console.log("Tipo de la variable: ",typeof(string))

//Operadores
console.log("Operador '=': ", 2 == 2) // Verifica que el valor sea el mismo
console.log("Operador '!=: ' ", 2 !== 4 ) // . Verifica que el valor sea diferente
console.log("Operador '>': ", 5 > 1) // Verifica si el valor es mayor
console.log("Operador '>='", 5 >= 4 ) //Verifica si el valor es mayor o igual
console.log("Operador '<='", 3 < 7 ) //Verifica si el valor es menor
console.log("Operador '>='", 9 <= 9 ) //Verifica si el valor es menor o igual

//Estructuras de Control
var edad = 17
if (edad >= 18) {
  console.log('eres mayor de edad')
}else{
  console.log('No es mayor de edad')
}

//Else if
let fruta = 'fresa'
if (fruta == 'fresa'){
  console.log('Tu fruta es una fresa')
}else if (fruta == 'pera') {
  console.log('tu fruta es una pera')
}else if (fruta == 'mango') {
  console.log('Tu fruta es un mango')
} else {
  console.log(`Tu fruta es ${fruta}`) //Template Literals o Template string
}

//Switch
let signo = prompt('Ingresa tu signo');

switch(signo) {
  case "aries":
    console.log("Te llegará dinero");
  break;
  case "Aries":
      console.log("Te llegará dinero");
  break;

  case "tauro":
    console.log("Conseguirás trabajo mañana");
  break;

  case "sagitario":
    console.log("Los astros no influyen en tu dia a dia");
  break;
  case"cáncer":
    console.log("Es una enfermedad")
  break;
  default:
  console.log("Ingresa un signo válido")
}
