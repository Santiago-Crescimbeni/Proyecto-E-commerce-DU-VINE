window.addEventListener("load", function () {

    const botellaBuscada = document.querySelector(".botella");
    
    //-----------------Redirecciones del header-----------------------
      
        const duVine = document.querySelector("h2");
        duVine.addEventListener("click", function () {
            window.location.replace("./index.html");
        });
    
        const Carrito = document.querySelector(".fa-cart-shopping");
        Carrito.addEventListener("click", function () {
          setTimeout(() => {
            location.replace("./Carrito.html");
          }, 700);
        });
    
        function recuperarDatosUsuario() {
            const datosEnJSON = localStorage.getItem("usuario");
            const datosPersonales = JSON.parse(datosEnJSON);
            // console.log(datosPersonales);
            return datosPersonales;
        }
    
        const usuario = recuperarDatosUsuario();
        console.log(usuario)
    //------------- Si no esta localStorage esta vacio, te lo crea con un array vacio--------------
        function arrayCarritoCompra() {
            let arrCarrito = usuario ? usuario : [];
            return arrCarrito;
        }
        arrCarritoCompra = arrayCarritoCompra();
        localStorage.setItem("usuario", JSON.stringify(arrCarritoCompra));
    
     //------------Agrega las cantidades de unidades y las muestra en icono de carrito--------
     const incrementosProductos = document.querySelector(".incrementoProductos");
      
     function marcaIncrementoEnCarrito(array) {
       let sumaProductos = 0;
       for (let i = 0; i < array.length; i++) {
         sumaProductos += array[i].cantidad;
         incrementosProductos.innerHTML = `${sumaProductos}`;
       }
       return sumaProductos;
     }
    let cantidad = marcaIncrementoEnCarrito(usuario)
    incrementosProductos.innerHTML =  cantidad;
    
    
        function renderizandoTarjetaconProductos(objeto, divCards) {
            objeto.forEach((buscaVino) => {
                let tarjetas = document.createElement("div")   
                divCards.appendChild(tarjetas);
                tarjetas.innerHTML = `
                    <li type="none" class="articulo"> ${buscaVino.nombre}
                        <div class="contenido-productoYagregados">
                            <div class="general-A">
                                <div class="productos">
                                    <div class="titulo-img">
                                        <img class="img-producto" src="${buscaVino.img}" alt="imagen">
                                    </div>
                                    <span class="span-nombre"> ${buscaVino.nombre}</span>
                                </div>
                                <div class="info-producto">
                                    <div class="precios">
                                        <h2 class="h2-special">Precio</h2>
                                        <div class="monto">
                                            <span class="span-precio">$${buscaVino.precio}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="cantidades">
                                    <h2 class="h2-special">Descripcion</h2>
                                    <div class="descripcion"> ${buscaVino.descripcion}</div>
                                </div>
                            </div>
                            <button class="carrito"> agregar al carroto <button>
                        </div>
                    </li>
                `;
    
                // buscaVino.cantidad = 0;
                // console.log(buscaVino)
                console.log(usuario)
                let AggAlCarrito = tarjetas.querySelector(".carrito");
                AggAlCarrito.addEventListener("click", () => {
    
                    const repetido = usuario.some(
                        (productoRepetido) => productoRepetido.id == buscaVino.id
                      );
                      console.log(repetido);
                
                      if (repetido) {
                        usuario.map((prod) => {
                          if (prod.id === buscaVino.id) {
                            prod.cantidad++;
                          }
                        });
                      } else {
                        usuario.push(buscaVino);
                      }
    
                    localStorage.setItem("usuario", JSON.stringify(usuario));
                    console.log(usuario)
                // }
                let cantidad = marcaIncrementoEnCarrito(usuario)
                incrementosProductos.innerHTML =  cantidad;
                });
                
                
                localStorage.setItem("usuario", JSON.stringify(usuario));
              
            });
            
           
        }
    
        renderizandoTarjetaconProductos(botellas, botellaBuscada);
    
        document.addEventListener("keyup", e => {
            if (e.target.matches("#buscador")) {
                if (e.key === "Escape") e.target.value = "";
                document.querySelectorAll(".articulo").forEach(vino => {
                    vino.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                        ? vino.classList.remove("filtro")
                        : vino.classList.add("filtro");
                });
            }
        });
    });