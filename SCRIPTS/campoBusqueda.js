
    const botellaBuscada = document.querySelector(".botella") 
  
//-----------Capturamos el logo Duvine y agregamos redireccionamiento con metodo de escucha ----------------.

const duVine = document.querySelector("h2");
duVine.addEventListener("click", function () {
  window.location.replace("./index.html");
});


    function renderizandoTarjetaconProductos(objeto, divCards){
        
        objeto.forEach(buscaVino=>{
           
           let carro = document.createElement("div")
           divCards.appendChild(carro);
           carro.innerHTML =`
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
<div class="cantidades"> <h2 class="h2-special">Descripcion</h2>
<div class="descripcion"> ${buscaVino.descripcion}</div>
</div>
</div>


</div>
</li>
            `


          

            
    
   
})

   

}
// if(botellaBuscada){
    renderizandoTarjetaconProductos(botellas, botellaBuscada)
// }


document.addEventListener("keyup", e=>{
    

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".articulo").forEach(fruta =>{
  
            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?fruta.classList.remove("filtro")
              :fruta.classList.add("filtro")
              
        })
       
    }
  
  
  })