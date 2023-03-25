window.addEventListener("load", function () {
    const Carrito = document.querySelector(".fa-cart-shopping");
    navegarACarrito();
    renderizacion();
    
  
    const usuario = recuperarDatosUsuario();
    console.log(usuario)
   
  //-----------Crea la funcion para renderizar diferentes vinos ----------------.
  
    function renderizacion() {
      const botonSiguiente = document.querySelector(".fa-caret-right");
      const botonAtras = document.querySelector(".fa-caret-left");
      const AggAlCarrito = document.querySelector(".compra");
      
      //------------Agrega funcionalidad a botones anterior, siguiente y agregar al carrito--------
      botonAtras.addEventListener("click", function () {
        retroceder(botellas);
      });
  
      botonSiguiente.addEventListener("click", function () {
        siguiente(botellas);
      });
  
      AggAlCarrito.addEventListener("click", function () {
        localStorage.setItem("usuario", JSON.stringify(arrCarritoCompra));
        const repetido = arrCarritoCompra.some(
          (productoRepetido) => productoRepetido.id == botellas[i].id
        );
        console.log(repetido);
  
        if (repetido) {
          arrCarritoCompra.map((prod) => {
            if (prod.id === botellas[i].id) {
              prod.cantidad++;
            }
          });
        } else {
          arrCarritoCompra.push(botellas[i]);
        }
  
        marcaIncrementoEnCarrito(arrCarritoCompra);
  
        
      });
    }
  
    function recuperarDatosUsuario() {
      const datosEnJSON = localStorage.getItem("usuario");
      const datosPersonales = JSON.parse(datosEnJSON);
      console.log(datosPersonales);
      return datosPersonales;
    }
    // console.log(usuario);
 
    function arrayCarritoCompra() {
    let arrCarrito;
    if(usuario){
      arrCarrito = usuario;
    }
    else{
      arrCarrito = [];
    }
    return arrCarrito;
  }
  let arrCarritoCompra = arrayCarritoCompra();


  //------------Agrega las cantidades de unidades y las muestra en icono de carrito--------
    let incrementosProductos = document.querySelector(".incrementoProductos");
    incrementosProductos.innerHTML = marcaIncrementoEnCarrito(usuario);
  
    function marcaIncrementoEnCarrito(array) {
      let sumaProductos = 0;
      for (let i = 0; i < array.length; i++) {
        sumaProductos += array[i].cantidad;
        incrementosProductos.innerHTML = `${sumaProductos}`;
      }
      return sumaProductos;
      
    }
  //-----------Se crean variables para interacciones entre la visualizacion de vinos ----------------.
  
    let i = 0;
    let p = 1;
    let j = 2;
    let r = 3;
  
    function retroceder(array) {
      i--;
      p--;
      j--;
      r--;
      if (i < 0) {
        i = botellas.length - 1;
      }
      if (p < 0) {
        p = botellas.length - 1;
      }
      if (j < 0) {
        j = botellas.length - 1;
      }
      if (r < 0) {
        r = botellas.length - 1;
      }
  
      const elemento = array[i];
      const elemento1 = array[p];
      const elemento2 = array[j];
      const elemento3 = array[r];
  
      //------------capturamos la clase de la imag principal y cambiamos la imagen--------
      let imgGrande = document.querySelector(".grande");
      imgGrande.setAttribute("src", elemento.imgGrande);
  
      //------------capturamos las imagenes pequeñas y las dinamizamos--------
      let imagen1 = document.querySelector(".ia1");
      imagen1.setAttribute("src", elemento1.img);
  
      let imagen2 = document.querySelector(".ia2");
      imagen2.setAttribute("src", elemento2.img);
  
      let imagen3 = document.querySelector(".ia3");
      imagen3.setAttribute("src", elemento3.img);
  
     //------------capturamos la clase de h2 y le cambiamos el contenido--------
      let nombre = document.querySelector(".nombre");
      nombre.innerHTML = `${elemento.nombre}`;
  
     //------------capturamos la clase del p y le cambiamos el contendido--------
      let descripcion = document.querySelector(".descVino");
      descripcion.innerHTML = `${elemento.descripcion}`;
  
   //------------capturamos la clase del precio y le cambiamos el valor--------
      let costo = document.querySelector(".valor");
      costo.innerHTML = `$ ${elemento.precio}`;
  
     //------------capturamos el titulo pricipal de la capa y le cambiamos el contendio--------
      let titular = document.querySelector("h1");
      titular.innerHTML = `${elemento.titulo}`;
    }
  
    function siguiente(array) {
      i++;
      p++;
      j++;
      r++;
      if (p >= botellas.length) {
        p = 0;
      }
      if (i >= botellas.length) {
        i = 0;
      }
      if (j >= botellas.length) {
        j = 0;
      }
      if (r >= botellas.length) {
        r = 0;
      }
  
      const elemento = array[i];
      const elemento1 = array[p];
      const elemento2 = array[j];
      const elemento3 = array[r];
  
    //------------capturamos la clase de la imag principal y cambiamos la imagen--------
      let imgGrande = document.querySelector(".grande");
      imgGrande.setAttribute("src", elemento.imgGrande);
  
     //------------capturamos las imagenes pequeñas y las dinamizamos--------
      let imagen1 = document.querySelector(".ia1");
      imagen1.setAttribute("src", elemento1.img);
  
      let imagen2 = document.querySelector(".ia2");
      imagen2.setAttribute("src", elemento2.img);
  
      let imagen3 = document.querySelector(".ia3");
      imagen3.setAttribute("src", elemento3.img);
  
     //------------capturamos la clase de h2 y le cambiamos el contenido--------
      let nombre = document.querySelector(".nombre");
      nombre.innerHTML = `${elemento.nombre}`;
  
      //------------capturamos la clase del p y le cambiamos el contendido--------
      let descripcion = document.querySelector(".descVino");
      descripcion.innerHTML = `${elemento.descripcion}`;
  
      //------------capturamos la clase del precio y le cambiamos el valor--------
      let costo = document.querySelector(".valor");
      costo.innerHTML = `$ ${elemento.precio}`;
  
      //------------capturamos el titulo pricipal de la capa y le cambiamos el contendio--------
      let titular = document.querySelector("h1");
      titular.innerHTML = `${elemento.titulo}`;
    }
  
    
    
    //------------Usando el storage para reutilizar el array de carrito-------------
    function navegarACarrito() {
      Carrito.addEventListener("click", function () {
        localStorage.setItem("usuario", JSON.stringify(arrCarritoCompra));
        setTimeout(() => {
          location.replace("./Carrito.html");
        }, 700);
      });
    }
  });