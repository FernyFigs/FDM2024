// VENTANA EMERGENTE CON INFORMACIÓN DEL NUEVO DISCO DE LA BANDA

document.addEventListener("DOMContentLoaded", () => {
  // Función para abrir el pop-up
  function openPopup() {
    // Crea el overlay y el contenido del pop-up
    const overlay = document.createElement("div");
    overlay.className = "popup-overlay";

    const popup = document.createElement("div");
    popup.className = "popup";

    // Imagen del pop-up
    const img = document.createElement("img");
    img.src = "./assets/img/discos/FDMHCUB.jpg";
    img.alt = "Logo Fin del Mundo";

    // Texto del pop-up
    const text = document.createElement("h2");
    text.textContent = "18 / 10 / 2024";

    // Para cerrar el pop-up
    const closeButton = document.createElement("button");
    closeButton.className = "popup-close";
    closeButton.textContent = "X";
    closeButton.addEventListener("click", () => {
      document.body.removeChild(overlay); // Remueve el pop-up
    });

    // Añade los elementos al pop-up
    popup.appendChild(img);
    popup.appendChild(text);
    popup.appendChild(closeButton);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    // Muestra el pop-up
    overlay.classList.add("show");
  }

  // Añadir el evento de click a los logos
  const logoLarge = document.querySelector(".nav_logo");
  const logoSmall = document.querySelector(".nav_logo-small");

  if (logoLarge) {
    logoLarge.addEventListener("click", openPopup);
  }

  if (logoSmall) {
    logoSmall.addEventListener("click", openPopup);
  }
});
