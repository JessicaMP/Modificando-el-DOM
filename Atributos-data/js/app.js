var personajes = document.querySelectorAll('.personaje');
for (var i = 0; i< personajes.length; i++) {
  personajes[i].addEventListener("click", mostrarInfoPersonaje);
}

function mostrarInfoPersonaje() {
  //console.log(this);(imprime en la consola todo el elemento q en este caso imprime todo la li)
  var nombre = this.dataset.nombre,
      fecha = this.dataset.fecha;
  //console.log(nombre, fecha);(aparte de imprimir lo de console this tambien imprime en consola el nombre y la fecha asignado a cada imagen)
  var parrafoInfo = document.createElement("p");
  parrafoInfo.classList.add('active');
  parrafoInfo.innerText = 'Su nombre es '+ nombre +' y su primera paricion fue en '+ fecha;
  //console.log(parrafoInfo);(Esto hace q solo se muestre en consola)
  var espacio = document.querySelector('.informacion');
  espacio.appendChild(parrafoInfo);

  var infoVisible = document.querySelector('p.active');
  infoVisible.classList.remove('active');
}
