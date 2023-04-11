window.addEventListener("load", function () {
  /* ---------------------- obtenemos variables globales ---------------------- */

  const form = document.forms[0];
  const nombre = document.querySelector("#inputNombre");
  const apellido = document.querySelector("#inputApellido");
  const email = document.querySelector("#inputEmail");
  const contrasenia = document.querySelector("#inputPassword");
  const repetirContrasenia = document.querySelector("#inputPasswordRepetida");
  const url = "http://todo-api.ctd.academy:3000/v1";

  //---------------------------------------------------------------------------------
  const nombreError = document.querySelector("#nombreError");
  const apellidoError = document.querySelector("#apellidoError");
  const emailError = document.querySelector("#emailError");
  const contraseniaError = document.querySelector("#passwordError");
  const repetirContraseniaError = document.querySelector("#repetirPasswordError");

  //-----------------------------------------------------------------------------------------

  const duVine = document.querySelector("h2");
  duVine.addEventListener("click", function () {
    window.location.replace("./index.html");
  });

  //Escuchamos el submit y preparamos el envío

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    //antes de enviar los datos comprobamos que esten validados

    const estadoUsuario = {
      nombre: "",
      apellido: "",
      email: "",
      contrasenia: "",
      repetirContrasenia: "",
    };

    const estadoErroresOK = {
      nombre: false,
      apellido: false,
      email: false,
      contrasenia: false,
      repetirContrasenia: false,
    };

    estadoUsuario.nombre = nombre.value;
    estadoUsuario.apellido = apellido.value;
    estadoUsuario.email = email.value;
    estadoUsuario.contrasenia = contrasenia.value;
    estadoUsuario.repetirContrasenia = repetirContrasenia.value;

    // actualizo el estado del error segun el estado del usuario
    estadoErroresOK.nombre = validarNombre(estadoUsuario.nombre);
    estadoErroresOK.apellido = validarApellido(estadoUsuario.apellido);
    estadoErroresOK.email = validarEmail(estadoUsuario.email);
    estadoErroresOK.contrasenia = validarContrasenia(estadoUsuario.contrasenia);
    estadoErroresOK.repetirContrasenia = validarRepetirContrasenia(
      estadoUsuario.contrasenia,
      estadoUsuario.repetirContrasenia
    );

    function mostrarErrores() {
      // por cada small mostramos u ocultamos el error
      estadoErroresOK.nombre
        ? null
        : (nombreError.textContent = "Debe ser un Nombre válido");
      estadoErroresOK.apellido
        ? null
        : (apellidoError.textContent = "Debe ser un Apellido válido");
      estadoErroresOK.email
        ? null
        : (emailError.textContent = "Debe ser un Email válido");
      estadoErroresOK.contrasenia
        ? null
        : (contraseniaError.textContent =
            "Deben ser al menos 6 caracteres sin espacios e incluir un número y un caracter especial");
      estadoErroresOK.repetirContrasenia
        ? null
        : (repetirContraseniaError.textContent =
            "Las contraseñas no coinciden");
    }

    function validarNombre(nombre) {
      let resultado = false;
      if (nombre.length > 3 && !nombre.includes(" ")) {
        resultado = true;
        console.log(resultado);
      }
      return resultado;
    }

    function validarApellido(apellido) {
      let resultado = false;
      if (
        typeof apellido === "string" &&
        apellido.length > 3 &&
        !apellido.includes(" ")
      ) {
        resultado = true;
        console.log(resultado);
      }
      return resultado;
    }

    function validarEmail(email) {
      let resultado = false;
      let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

      if (regex.test(email)) {
        resultado = true;
        console.log(resultado);
      }
      return resultado;
    }

    function validarContrasenia(contrasenia) {
      let resultado = false;

      if (!contrasenia.includes(" ")) {
        resultado = true;
        console.log(resultado);
      }

      return resultado;
    }

    function validarRepetirContrasenia(contraseniaAnterior, repiteContrasenia) {
      let resultado = false;

      if (contraseniaAnterior === repiteContrasenia) {
        resultado = true;
        console.log(resultado);
      }
      return resultado;
    }

    if (
      estadoErroresOK.nombre &&
      estadoErroresOK.apellido &&
      estadoErroresOK.email &&
      estadoErroresOK.contrasenia &&
      estadoErroresOK.repetirContrasenia
    ) {
      alert("Pasó todas las validaciones!");

      //creamos el cuerpo de la request
      const datoRegistro = {
        firstName: estadoUsuario.nombre,
        lastName: estadoUsuario.apellido,
        email: estadoUsuario.email,
        password: estadoUsuario.contrasenia,
      };

      //configuramos la request del Fetch
      const configuraciones = {
        method: "POST",
        body: JSON.stringify(datoRegistro),
        headers: {
          "Content-Type": "application/json",
        },
      };
      //lanzamos la consulta de login a la API
      realizarRegister(configuraciones);

      //limpio los campos del formulario
      form.reset();
    } else {
      alert("Algunos de los datos son incorrecto.");
      console.log(estadoErroresOK);
      mostrarErrores();
    }
  });
  // Realizar el signup [POST]

  function realizarRegister(configuraciones) {
    console.log("Lanzando la consulta a la API");
    fetch(`${url}/users`, configuraciones)
      .then((response) => {
        console.log(response);

        if (response.ok != true) {
          alert("Alguno de los datos es incorrecto.");
        }

        return response.json();
      })
      .then((data) => {
        console.log("Promesa cumplida:");
        console.log(data);

        if (data.jwt) {
          //guardo en LocalStorage el objeto con el token
          localStorage.setItem("jwt", JSON.stringify(data.jwt));

          //redireccionamos a la página

          setTimeout(() => {
            location.replace("./index.html");
          }, 2000);
        }
      })
      .catch((err) => {
        console.log("Promesa rechazada:");
        console.log(err);
      });
  }
});
