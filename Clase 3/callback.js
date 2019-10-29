//Callback
let callback = () => {
    console.log("Este es mi mensaje dentro de un callback");
  }
  
  //Funcion de orden superior
  function mostrarMensaje(callback){
    callback();
  }
  
  mostrarMensaje(callback)
  