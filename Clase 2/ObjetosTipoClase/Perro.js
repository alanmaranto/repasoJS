
class Perro extends Mascota {
    constructor(raza,color,nombre){
      super(nombre,4); //Palabra clave usada para acceder y llamar funciones del padre de un objeto
      console.log('Se creó el perro');
      this.raza = raza;
      this.color = color;
    }
  
    getRaza(){
      return this.raza
    }
}
