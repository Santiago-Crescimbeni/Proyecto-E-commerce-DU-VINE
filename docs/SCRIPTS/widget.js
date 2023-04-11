
const widget = document.querySelector(".widget");

fetch("./widget.html")
  .then((response) => response.text())
  .then((data) => {
    widget.innerHTML = data;
    //-----------Capturamos el buscador y agregamos redireccionamiento con metodo de escucha ----------------.

    const chat = document.getElementById("chat");

    const burbuja = document. getElementById ("burbuja");
    
    burbuja.addEventListener('click', () => {
    chat.classList.toggle('open');
    });

    function obtenerHoraActual() {
        const fecha = new Date();
        const hora = fecha.getHours();
        const minutos = fecha.getMinutes();
        const horaActual = `${hora}:${minutos}`;
        return horaActual;
      }
      const horaActual = obtenerHoraActual();
document.getElementById("hora_actual").textContent = horaActual;

setInterval(function() {
    const horaActual = obtenerHoraActual();
    document.getElementById("hora_actual").textContent = horaActual;
  }, 1000);

  const nombre = document.querySelector(".nombre")
//   nombre.innerText += ;
  });