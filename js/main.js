// const nav = document.querySelector("#nav");
// const abrir = document.querySelector("#abrir");
// const cerrar = document.querySelector("#cerrar");

// abrir.addEventListener("click", () => {
//     nav.classList.add("visible");
// })

// cerrar.addEventListener("click", () => {
//     nav.classList.remove("visible");
// })

// Obtener elementos del DOM
var modal = document.getElementById("myModal");
var btnOpen = document.getElementById("openModal");
var btnClose = document.getElementsByClassName("close")[0];

// Abrir modal al hacer clic en el botón de apertura
btnOpen.onclick = function() {
  modal.style.display = "block";
}

// Cerrar modal al hacer clic en el botón de cierre
btnClose.onclick = function() {
  modal.style.display = "none";
}

// Cerrar modal al hacer clic fuera del contenido del modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}