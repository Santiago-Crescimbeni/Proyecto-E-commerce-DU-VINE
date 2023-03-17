//-----------Se crea el header de manera dinamica ----------------.

const header = document.querySelector("#header");

fetch("./header.html")
  .then((response) => response.text())
  .then((data) => {
    header.innerHTML = data;

//--------------Capturamos el menu hamburguesa para renderizar----------------

const menuHambur=document.querySelector('.fa-bars');
const divUsuarioEnMenu=document.querySelector('.Usuario');
const headerFondo = document.querySelector("header");

//----------Estas Selecciones ya tienen redireccionamiento--------
  const nombreUsuarioEnMenu=document.querySelector('.nombreUsuario');
  const iconoCarritoEnMenu=document.querySelector('.fa-cart-shopping');
  const iconoUsuarioEnMenu=document.querySelector('.fa-user');
  
  //-------- Seleccionamos etiqueta Ubicacion y agregamos redireccionamiento desde el menu con metodos de escucha--------
  const iconoUbicacionEnMenu=document.querySelector('.fa-location-dot');
  
  iconoUbicacionEnMenu.addEventListener("click", function () {
    window.location.replace("./contactenos.html");
  });
  
  //-------- Seleccionamos etiqueta botella y agregamos redireccionamiento desde el menu con metodos de escucha--------
  const iconoBotellaEnMenu=document.querySelector('.fa-bottle-droplet');
  
  iconoBotellaEnMenu.addEventListener("click", function () {
    window.location.replace("./dateUnGustito.html");
  });
  
  //-------- Seleccionamos etiqueta casa y agregamos redireccionamiento desde el menu con metodos de escucha--------
  const iconoCasaEnMenu=document.querySelector('.fa-house');

  iconoCasaEnMenu.addEventListener("click", function () {
    window.location.replace("./index.html");
  });
  
  
  //-------- Agregamos el metodo toggle para activar y desactivar el menu con metodos de escucha--------
  
  menuHambur.addEventListener('click',function(){
    headerFondo.classList.toggle('headerFondoNegro');
    nombreUsuarioEnMenu.classList.toggle('nuevop');
    divUsuarioEnMenu.classList.toggle('nuevoUsuario');
    iconoCarritoEnMenu.classList.toggle('nuevoiconos');
    iconoUsuarioEnMenu.classList.toggle('nuevoiconos');
    iconoCasaEnMenu.classList.toggle('nuevoiconos');
    iconoUbicacionEnMenu.classList.toggle('nuevoiconos');
    iconoBotellaEnMenu.classList.toggle('nuevoiconos');
    

  })

    //-----------Capturamos el logo Duvine y agregamos redireccionamiento con metodo de escucha ----------------.

    const duVine = document.querySelector("h2");
    duVine.addEventListener("click", function () {
      window.location.replace("./index.html");
    });
    //-----------Capturamos el icono carrito y agregamos redireccionamiento con metodo de escucha ----------------.

    const Carrito = document.querySelector(".fa-cart-shopping");
    Carrito.addEventListener("click", function () {
      setTimeout(() => {
        location.replace("./Carrito.html");
      }, 700);
    });
    //-----------Capturamos el buscador y agregamos redireccionamiento con metodo de escucha ----------------.

    const campoBusqueda = document.querySelector("#buscador");
    campoBusqueda.addEventListener("click", () => {
      setTimeout(() => {
        location.replace("./campoBusqueda.html");
      }, 800);
      
    });



  });

 
    //-------------------------Damos Funcionalidad a Hamburguesa---------------------

//---- Cargar el archivo HTML de footer en el elemento div con id "footer"---------
const footer = document.querySelector("#footer");
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    footer.innerHTML = data;
  });