// Objeto Tipo Clase Padre
class Mascota {
    constructor(nombre,patas){
      this.nombre = nombre;
      this.patas = patas;
      console.log('Se creó la Mascota')
    }
  
    getName(){
      return this.nombre
    }
}

//Prepara la class mascota para poder ser llamada en otro archivo
