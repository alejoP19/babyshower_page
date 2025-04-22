

document.addEventListener('DOMContentLoaded', function() {
  const lista = document.getElementById('miLista');

  lista.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      const enlace = event.target.querySelector('a');
      if (enlace) {
        enlace.click(); // Simula el clic en el enlace
        event.preventDefault(); // Evita el comportamiento predeterminado del clic en el <li>
      }
    }
  });
});
