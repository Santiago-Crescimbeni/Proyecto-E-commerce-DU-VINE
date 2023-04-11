//---------------------Captura de 3 Botones en index Principal-------------------------------
const paraEventos = document.querySelector(".boton-A");
const contactanos = document.querySelector(".boton-B");
const botonDarseUnGusto = document.querySelector(".boton-C");

//---------------------Metodos de Escucha y Redirecciones------------------------------------

botonDarseUnGusto.addEventListener("click", () => {
  setTimeout(() => {
    location.replace("./dateUnGustito.html");
  }, 1500);
});

contactanos.addEventListener("click", function () {
  setTimeout(() => {
    location.replace("./contactenos.html");
  }, 1500);
});

paraEventos.addEventListener("click", function () {
  setTimeout(() => {
    location.replace("./eventos.html");
  }, 1500);
});

//-----------recuperamos el la informacion de las botellas añadidas del usuario en el carro---------------

function recuperarDatosUsuario() {
  const datosEnJSON = localStorage.getItem("usuario");
  const datosPersonales = JSON.parse(datosEnJSON);
  console.log(datosPersonales);
  return datosPersonales;
}

const usuario = recuperarDatosUsuario();
console.log(usuario)
function arrayCarritoCompra() {
  let arrCarrito;

  if(usuario){
    arrCarrito = usuario;
  }
  else{
    arrCarrito = [];
  }
  return arrCarrito;
  console.log(arrCarrito)
}
arrCarritoCompra = arrayCarritoCompra();

localStorage.setItem("usuario", JSON.stringify(arrCarritoCompra));