/* Crear una clase Bebida que herede a dos clases Cerveza y Refresco. ambas clases 
deben tener la propiedad cantidad(ml). La clase Refresco debe tener el atributo azucar(g) y la clase
Cerveza debe tener el atributo porcentajeAlcohol. Crear las funciones getters y setters correspondientes.
*/

class Bebida {
    constructor(cantidad){
        this.cantidad = cantidad;
    }

    getCantidad(){
        return this.cantidad;
    }

    setCantidad(cantidad){
        this.cantidad = cantidad;
    }
}

class Cerveza extends Bebida {
    constructor(cantidad, porcentajeAlcohol){
        super(cantidad);
        this.porcentajeAlcohol = porcentajeAlcohol
    }

    getPorcentajeAlcohol(){
        return this.porcentajeAlcohol;
    }

    setPorcentajeAlcohol(porcentaje){
        this.porcentajeAlcohol = porcentaje
    }
}

class Refresco extends Bebida {
    constructor(cantidad, azucar) {
        super(cantidad);
        this.azucar = azucar
    }

    getAzucar(){
        return this.azucar;
    }

    setAzucar(azucar){
        this.azucar = azucar;
    }
}

const cerveza = new Cerveza(355, 4.5);
console.log( cerveza.getPorcentajeAlcohol(), cerveza.getCantidad());

const refresco = new Refresco(600, 200);
console.log( refresco.getAzucar(), cerveza.getCantidad())