function buscarFolio() {
    // Obtener el valor del input
    var folio = document.getElementById('folioInput').value;

    // Validar que el input no esté vacío
    if (folio.trim() === '') {
        alert('Por favor, ingrese un número de folio.');
        return;
    }

    // Crear la URL del archivo HTML correspondiente
    var url = folio + '.html';

    // Redirigir el navegador a la URL del archivo HTML
    window.location.href = url;
}
