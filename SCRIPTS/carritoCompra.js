window.addEventListener("load", function () {
    const usuario = recuperarDatosUsuario();

    renderizacionCarrito(usuario, sumarPrecios(usuario));
   
  });
  
  // ----------------Seleccionamos los elementos a usar-------------------
  const cabezera = document.querySelector("head");
  const principal = document.querySelector("main");
  const Carrito = document.querySelector(".fa-cart-shopping");
  const descubriEstasOfertas = document.querySelector(".volverAComprar");
  
  
  // ----------------Seleccionamos boton para redireccionar y mostrar nuevamente los vinos -------------------
  
  descubriEstasOfertas.addEventListener("click", function () {
    setTimeout(() => {
      window.location.replace("./dateUnGustito.html");
    }, 1000);
  });
  
  // -----------------Recuperamos datos del local Storage, archivo dateUnGusto para usarlos en esta seccion-----------------
  
  function recuperarDatosUsuario() {
    const datosEnJSON = localStorage.getItem("usuario");
    const datosPersonales = JSON.parse(datosEnJSON);
    console.log(datosPersonales);
    return datosPersonales;
  }
  // ----------------Sumamos Precios de un vino y su cantidad -------------------
  
  function sumarPrecios(array) {
    const suma = array.reduce(
      (acumulador, vino) => acumulador + vino.precio * vino.cantidad,
      0
    );
    return suma;
  }
  
  
  
  
  //---------------Renderiza el contendio del html para que nos aparescan los productos---------------
  function renderizacionCarrito(objeto, total) {
    //---------------Se captura los precios con impuesto en diferentes variables para posteriormente renderizarlos---------------
    let calculodeDelImpuesto = total * 0.21;
    let sumaCalculoFinal = total + calculodeDelImpuesto;
  
  //---------------Renderiza el contendio calculo de precios junto a las cards de productos elegidos---------------
  
    if (objeto.length != 0) {
      principal.innerHTML = ` 
                   <h1>Carrito de Compras</h1>
                   <section class="prod-cant-prec-total">  
                       <div class="contenido-productoYagregados">
                      </div >
                      <div class="general-B">
                      <h2 class="costo-pedido">Total del Pedido</h2>
                      <h3 class="total">SUB TOTAL = $ ${total}<span></span></h3>
                      <h3 class="total">IMPUESTOS = $ ${calculodeDelImpuesto}<span></span></h3>
                      <hr>
                      <h3 class="total">TOTAL : $ ${sumaCalculoFinal}<span></span></h3>
                      <button class="pagar">PAGAR AHORA</button>
                  
                  </div>
              </section>
                  <button class="seguir-comprando">Seguir Comprando</button>
                  `;
      const seccionRenderizarTarjetas = document.querySelector(".contenido-productoYagregados");
      renderizandoTarjetaconProductos(objeto, seccionRenderizarTarjetas, total);
    }
  
    //--------------Captura boton "seguir Comprando y redirecciona"-----------------
  
    }

  //--------------Renderiza todas las tarjetas con la infomacion de los productos seleccionados-----------------
  
  function renderizandoTarjetaconProductos(objeto, divCards, masTotal) {
    objeto.forEach((buscaVino) => {
      let carro = document.createElement("div");
      divCards.appendChild(carro);
      carro.innerHTML = `
                         <div class="contenido-productoYagregados">
          <li type="none">
          <div class="general-A">
           <div class="productos">
                              <h2 class="h2-productos">Producto</h2>
                              <div class="titulo-img">
                              <span class="span-nombre"> ${buscaVino.nombre}</span>
                              <img class="img-producto" src="${buscaVino.img}" alt="imagen">
                              </div>
          </div>
          <div class="info-producto">
          <div class="cantidades">
                              <h2 class="h2-special">Cantidad</h2>   
                              <div class="sum-span-res">     
                              <i class="fa-solid fa-minus"></i>
                              <h3 class="cantidad-productos"> ${buscaVino.cantidad} </span></h3>
                              <i class="fa-solid fa-plus"></i>
                             

                              </div>
          </div>
          <div class="precios">
                              <h2 class="h2-special">Precio</h2>
                              <div class="monto">
                              <span class="span-precio">$${buscaVino.precio}</span>
                              </div>
                              
                  
          </div>  
          <i class="fa-solid fa-xmark"></i>
          </div>
          </div>
              
  </div>
                          `;
  //---------------Suma el precio de una misma card y renderiza en el apartado de precio de la card---------------
  
      let sumaPrecioCardMismaBotella = buscaVino.precio * buscaVino.cantidad;
      carro.querySelector(".span-precio").innerHTML = `$${sumaPrecioCardMismaBotella}`;
  
      //-----------Funcionalidad de los botones incremento y decremento del precio y cantidad de los vinos.
      let restar = carro.querySelector(".fa-minus");
      let sumar = carro.querySelector(".fa-plus");
      



      const eliminar = carro.querySelector(".fa-xmark");

      eliminar.addEventListener('click', () => {
        // Encuentra el índice del objeto que se va a eliminar
        const index = objeto.indexOf(buscaVino);
      
        // Si el objeto se encuentra en el array, elimina ese objeto del array
        if (index > -1) {
          objeto.splice(index, 1);
        }
        // Calcula el nuevo total
  const nuevoTotal = masTotal - buscaVino.precio * buscaVino.cantidad;

  // Renderiza el carrito actualizado
  renderizacionCarrito(objeto, nuevoTotal);

  // Guarda el nuevo estado en localStorage
  localStorage.setItem("usuario", JSON.stringify(objeto));

if (objeto.length == 0) {
  setTimeout(() => {
    location.replace("./carrito.html");
  }, 1000);
}

})

      restar.addEventListener("click", btnResta);
  
      function btnResta() {
        if (buscaVino.cantidad > 1) {
          buscaVino.cantidad--;
          let nuevoTotal = masTotal - buscaVino.precio;
          carro.querySelector(".cantidad-productos").innerHTML =
            buscaVino.cantidad;
      
          renderizacionCarrito(objeto, nuevoTotal);
          localStorage.setItem("usuario", JSON.stringify(objeto));
      
          
        }
      }
  
      sumar.addEventListener("click", () => {
        buscaVino.cantidad++;
  
        carro.querySelector(".cantidad-productos").innerHTML = buscaVino.cantidad;
        let nuevoTotal = masTotal + buscaVino.precio;
  
        renderizacionCarrito(objeto, nuevoTotal);
        localStorage.setItem("usuario", JSON.stringify(objeto));
        redireccionADateUnGustitos(objeto);
        localStorage.setItem("usuario", JSON.stringify(objeto));
      });
  
      redireccionAConfirmarEnvio();
      redireccionADateUnGustitos(objeto);
    });
  
    redireccionAConfirmarEnvio();
    
  }
  
  // --------------Redireccion del boton pagar a confirmarEnvio.--------------
  function redireccionAConfirmarEnvio() {
    const confirmarEnvio = document.querySelector(".pagar");
    confirmarEnvio.addEventListener("click", function () {
      setInterval(() => {
        location.replace("./confirmacionCompra.html");
      }, 1500);
    });
  }
  
  function redireccionADateUnGustitos(datos) {
  const BTNseguirComprando = document.querySelector(".seguir-comprando");
  BTNseguirComprando.addEventListener("click", function () {
 console.log(datos);
 setTimeout(() => {
 
 location.replace("./DateUnGustito.html");
  
    }, 1000);

  })}
  