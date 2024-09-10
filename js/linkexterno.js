// MENSAJE CUANDO SE ABRE LINK A OTRA PAGINA

// Selecciona los elementos css para ejecutar la función del evento
document.addEventListener("DOMContentLoaded", () => {
  const externalLinks = document.querySelectorAll(
    ".contenedor-icon a, .logos, .external-link, .logolinktree, .links-compra a, .btn-comprar"
  );

  externalLinks.forEach((link) => {
    // Verifica que el enlace contenga un atributo href válido
    const href = link.getAttribute("href");
    if (!href) return; // Si no hay href, no hace nada

    link.addEventListener("click", (event) => {
      event.preventDefault(); // No abre el enlace de inmediato

      const message = "Serás redirigidx a otro sitio";
      const result = window.confirm(message);

      if (result) {
        console.log("Link href:", href); // Verifica el valor de href
        window.open(href, "_blank"); // Abre el enlace en una nueva pestaña
      }
    });
  });
});
