let visitas = localStorage.getItem("Suma") || 0;
const Visitas = document.getElementById("visitas");
let usuarioAnterior = localStorage.getItem("usuario") || null;
const bienvenidos = document.getElementById("usuario");

function identificarUsuario() {
  let usuario = prompt("Ingresar nombre");
  if (usuario) {
    bienvenidos.innerHTML = `Bienvenido/a ${usuario}`;
    localStorage.setItem("usuario", usuario);
  } else {
    swal.fire({
      title:"Debe ingresar un nombre válido",
      icon:"error"
    });
  }
}

function funcionalidadCarga() {
  bienvenidos.addEventListener("click", identificarUsuario);
  usuarioAnterior
    ? (bienvenidos.textContent = `Bienvenido/a ${usuarioAnterior}`)
    : (bienvenidos.textContent = "Bienvenido/a");
}

function contadorVisitas() {
  visitas++;
  localStorage.setItem("Suma", visitas);
  Visitas.textContent = `Visitas: ${visitas}`;
}

contadorVisitas();
funcionalidadCarga();
