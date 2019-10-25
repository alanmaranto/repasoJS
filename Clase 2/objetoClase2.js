/* Construir un objeto tipo clase Maestro y sublacases Maestro de Fisica y Maestro de Musica y a cada uno 
asignarle su materia y calcular su promedio de grupo a partir de calificaciones (puedes usar arreglos). 
El maestro de fisica tiene un atributo "antiguedad" que guarda un valor numerico, mientras que el 
maestro de musica tiene un atributo "edad" tambien guardado como valor numerico*/

class Maestro {
    constructor(materia, calificaciones){
      this.materia = materia;
      this.calificaciones = calificaciones;
    }
  
    getPromedio(){
  
      let sumaTotal = 0;
  
      for( let i=0; i<this.calificaciones.length; i++){
        //sumaTotal = sumaTotal + this.calificaciones[i]
        sumaTotal += this.calificaciones[i]
      }
  
      return (sumaTotal/this.calificaciones.length);
    }
  }
  
  class MaestroMusica extends Maestro {
    constructor(materia,calificaciones,edad){
      super(materia, calificaciones);
      this.edad = edad;
    }
  }
  
  class MaestroFisica extends Maestro {
    constructor(materia, calificaciones, antiguedad){
      super(materia, calificaciones);
      this.antiguedad = antiguedad;
    }
  }
  
  const profe1 = new MaestroFisica('fisica', [7,8,8,10,6], 10);
  console.log(profe1)
  const profe2 = new MaestroMusica('musica', [9,10,10,8,8], 30)
  console.log(profe2)
  
  
  console.log(profe1.getPromedio())
  console.log(profe2.getPromedio())
  
  