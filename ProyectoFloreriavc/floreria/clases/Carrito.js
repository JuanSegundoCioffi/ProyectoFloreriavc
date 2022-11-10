class Carrito {
  constructor(productos) {
    this.productos = productos;
  }

  agregarAlCarrito(producto) {
    this.productos.push({
      image: producto.image,
      title: producto.title,
      price: producto.price,
      id: producto.id,
      quantity: 1,
    });
  }

  guardar() {
    localStorage.setItem("CARRITO", JSON.stringify(this.productos));
  }

  vaciar() {
    this.productos.length = 0;
  }
}