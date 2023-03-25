window.addEventListener("load", function () {

    //--------------------Captura y Redireccion del boton volver a inicio---------------
      const volverAlInicio = document.querySelector(".salir");
      volverAlInicio.addEventListener("click", function () {

        window.location.replace("./index.html");
      });
    });