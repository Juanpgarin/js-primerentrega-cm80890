alert("Estás a punto de ingresar al universo de UMBRA");

let nombre = prompt("¿Cuál es tu nombre?");
if (nombre != "") {
  alert("Bienvenido/a " + nombre + " al universo de UMBRA");
  console.log("Nombre: " + nombre);
} else {
  alert("Gracias por visitar el UNIVERSO DE UMBRA");
}

let edad = prompt("¿Cuál es tu edad?");
console.log("Edad: " + edad);

const productos = ["Libro Inmundo", "Remera Umbra", "Taza Umbra"];

function comprarProducto() {
  let eleccion = prompt("Elegí un producto:\n1 - Libro Inmundo\n2 - Remera Umbra\n3 - Taza Umbra");
  let cantidad = prompt("¿Cuántas unidades querés comprar?");

  alert("Agregaste " + cantidad + " unidad(es) de " + productos[eleccion - 1] + " al carrito");

  console.log("Producto elegido (número): " + eleccion);
  console.log("Producto elegido (nombre): " + productos[eleccion - 1]);
  console.log("Cantidad: " + cantidad);
}

if (edad >= 18) {
  alert("Bienvenido al mundo de UMBRA, donde el terror acecha en la oscuridad");
  comprarProducto();
} else {
  alert("Lo sentimos, el contenido es exclusivo para mayores de 18 años");
  alert("Pero podés visitar nuestro instagram @umbra.escritos para ver contenido exclusivo");
}