
// OBjetos de tipo clase hijos/hijas
class Gato extends Mascota{
    constructor(vidas){
      super(garfield,4)
      console.log('Se creó al gato');
      this.vidas = vidas
    }
  
    getLifes(){
      return this.vidas
    }
}
