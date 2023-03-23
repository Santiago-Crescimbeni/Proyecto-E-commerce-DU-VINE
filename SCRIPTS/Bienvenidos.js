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