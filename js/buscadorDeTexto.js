function buscarPlaya() {
  // Obtén el valor ingresado en el campo de búsqueda
  var searchText = document.getElementById("search-input").value.toLowerCase();

  // Obtén todos los elementos de la lista de playas
  var playas = document.querySelectorAll("#playa-list li");

  // Verifica si el campo de búsqueda está vacío
  if (searchText === "") {
    // Si está vacío, oculta la lista de resultados
    document.getElementById("playa-list").style.display = "none";
    return; // Sale de la función para evitar mostrar resultados vacíos
  }

  // Itera sobre los elementos de la lista de playas
  for (var i = 0; i < playas.length; i++) {
    var playa = playas[i];
    var nombrePlaya = playa.textContent.toLowerCase();

    // Comprueba si el nombre de la playa contiene el texto de búsqueda
    if (nombrePlaya.includes(searchText)) {
      // Muestra la playa si coincide con la búsqueda
      playa.style.display = "block";
      playa.style.color = "white !important";   // Cambia el color de texto a blanco
    } else {
      // Oculta la playa si no coincide con la búsqueda
      playa.style.display = "none";
    }
  }

  // Muestra la lista de playas después de realizar la búsqueda
  document.getElementById("playa-list").style.display = "block";
}