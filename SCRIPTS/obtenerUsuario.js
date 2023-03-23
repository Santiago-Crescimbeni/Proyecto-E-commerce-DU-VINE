// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.
// if (localStorage.jwt) {
//   location.replace('./index.html');
// }

/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener('load', function () {
  
  const urlUsuario = 'http://todo-api.ctd.academy:3000/v1/users/getMe'; 
  
  
  const loguear = document.querySelector(".fa-user")
  loguear.addEventListener("click", loguearse)
  
  const token = JSON.parse(localStorage.jwt);
  obtenerNombreUsuario();
  
  console.log(token)
 
  
  
  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function obtenerNombreUsuario() {
    
    const configuraciones = {
      method: 'GET',
      headers: {
        authorization: token,
      }
    };
    console.log("Consultando mi usuario...");
    fetch(urlUsuario, configuraciones)
      .then(response => response.json())
      .then(data => {
        console.log("Nombre de usuario:");
        console.log(data.firstName);

     
        const nombreYApellido = document.querySelector(".nombreUsuario")
        if(data.firstName){
        nombreYApellido.innerHTML+= ", " + data.firstName +" "+ data.lastName;
        nombreUsuario.innerText += data.firstName;
        }

        btnCerrarSesion.addEventListener('click', function () {
          const cerrarSesion = confirm("¿Desea cerrar sesión?");
          if (cerrarSesion) {
            //limpiamos el localstorage y redireccioamos a login
            localStorage.clear();
            location.replace('./index.html');
          }
        });
        
      })
      .catch(error => console.log(error));
  }

 function loguearse(){
 
  // const nombreUsuario = document.querySelector("nombreUsuario")
  // nombreUsuario.addEventListener("click", () => {alert("asdadasdasad")})
  
  const head = document.querySelector("head")
  const main = document.querySelector("main")
      head.innerHTML += `
      <link rel="stylesheet" href="./CSS/ingresar.css"> `
      main.innerHTML += `
  <div class="container">
    <form class="form-login">
    <i class="fa-regular fa-circle-xmark"></i>
      <div class="form-header">
        <h2>Du Vine</h2>
        <p class="rounded">Iniciar seción</p>
      </div>
  
      <label>Email</label>
      <input id="inputEmail" type="text">
      <label>Contraseña</label>
      <input id="inputPassword" type="password">
  
      <button type="submit">Acceder</button>
  
    </form>
  
    <div class="ingresarA">
      <a href="registro.html">¿No tienes una cuenta? Regístrate aquí</a>
    </div>
  </div>
  </div>
      `
  
  
      const form = document.querySelector(".form-login");
      const email = document.querySelector('#inputEmail')
      const password = document.querySelector('#inputPassword')
      const url = "http://todo-api.ctd.academy:3000/v1";  
      const x = document.querySelector(".fa-circle-xmark")
  
      x.addEventListener("click", function(){
          setTimeout(() => {
              location.replace("./index.html")
          }, 500);
          
      })
      
    
      //Escuchamos el submit y preparamos el envío 
      form.addEventListener('submit', function (event) {
          event.preventDefault();
      
          //creamos el cuerpo de la request
          const datosLogin = {
              email: email.value,
              password: password.value
          };
          //configuramos la request del Fetch
          const configuraciones = {
              method: 'POST',
              body: JSON.stringify(datosLogin),
              headers: {
                  'Content-Type': 'application/json'
              }
          };
          //lanzamos la consulta de login a la API
          realizarLogin(configuraciones);
      
          //limpio los campos del formulario
          form.reset();
      });
      
      
    //Realizar el login [POST]
      function realizarLogin(configuraciones) {
          
          console.log("Lanzando la consulta a la API...");
          fetch(`${url}/users/login`, configuraciones)
              .then(response => {
                  console.log(response);
      
                  if (response.ok != true) {
                      alert("Alguno de los datos es incorrecto.")
                  }
      
                  return response.json();
      
              })
              .then(data => {
                  console.log("Promesa cumplida:");
                  console.log(data);
      
                  if (data.jwt) {
                      //guardo en LocalStorage el objeto con el token
                      localStorage.setItem('jwt', JSON.stringify(data.jwt));
      
                      setTimeout(() => {
                        location.replace('./index.html');
                      }, 1000);
                      //redireccionamos a la página
                      
                  }
              }).catch(err => {
                  console.log("Promesa rechazada:");
                  console.log(err);
              })
      };
      
     }
})
 