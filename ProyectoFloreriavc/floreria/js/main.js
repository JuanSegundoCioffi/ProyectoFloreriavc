const url = "./data/data.json";
const info = JSON.parse(localStorage.getItem("CARRITO")) || [];
let carrito = new Carrito(info);
const contenedorProductos = document.querySelector(".productos-container");
const contador = document.querySelector(".contador-carrito");


const mostrarProductos = () => {
  fetch(url)
    .then((res) => res.json())
    .then((productos) => {
      productos.forEach((producto) => {
        const infoProducto = document.createElement("div");
        infoProducto.classList.add("productos-contenido");
        infoProducto.innerHTML = `
            <img src='${producto.image}' alt='productos-img'>
            <h3 class='productos-nombre'>${producto.category}</h3>
            <span class='productos-detalles'>${producto.title}</span>
            <span class='productos-precio'>$${producto.price}</span>
            <button id='agregar${producto.id}' class='button productos-button'><i class="bx bx-cart-alt"></i></button>
        `;
        contenedorProductos.append(infoProducto);

        const botonAgregar = document.querySelector(`#agregar${producto.id}`);
        botonAgregar.addEventListener("click", () => {
          agregarProducto(producto.id);
        });
      });
    });
};

const agregarProducto = (prodId) => {
  fetch(url)
    .then((res) => res.json())
    .then((productos) => {
      let esta = info.some((prod) => prod.id === prodId);
      if (esta) {
        info.map((prod) => {
          prod.id === prodId && prod.quantity++;
        });
      } else {
        let item = productos.find((prod) => prod.id === prodId);
        carrito.agregarAlCarrito(item);
      }
      carrito.guardar();
      actualizarCarrito();
    });
};

const actualizarCarrito = () => {
  let cantidadTotal = carrito.productos.reduce((acc, p) => acc + p.quantity, 0);
  cantidadTotal === 0
    ? (contador.textContent = "")
    : (contador.textContent = `${cantidadTotal}`);
};

const main = () => {
  actualizarCarrito();
  mostrarProductos();
};

main();
