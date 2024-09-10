// MENSAJE DE FORMULARIO

function enviar() {
  alert("¡Gracias por tu mensaje!");
}

// MENSAJE PARA DESCARGAR PDF

document.addEventListener("DOMContentLoaded", function () {
  const linkpdf = document.querySelectorAll(".link-pdf");

  linkpdf.forEach(function (element) {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      // Evita la descarga predeterminada

      const confirmDownload = window.confirm(
        "Estás a punto de descargar un archivo PDF. ¿Deseas continuar?"
      );
      if (confirmDownload) {
        window.location.href = element.getAttribute("href");
      }
    });
  });
});
// Si se acepta el mensaje se abre la ventana para descargar el PDF (si cancela no abre la descarga)
