alert("Estás a punto de ingresar al universo de UMBRA");

let nombre = prompt("¿Cuál es tu nombre?");
if (nombre != "") {
  alert("Hola " + nombre + " Bienvenido/a al universo de UMBRA");
  console.log("Nombre: " + nombre);
} else {
  alert("Gracias por visitar el UNIVERSO DE UMBRA");
}

let edad = prompt("¿Cuál es tu edad?");
console.log("Edad: " + edad);

const productos = ["Libro Infecta:Letum", "Buzo Umbra", "Taza Umbra"];
const precios = [50000, 70000, 15000];

function calcularTotal(eleccion, cantidad) {
  return precios[eleccion - 1] * cantidad;
}

function comprarProductos() {
  let totalCompra = 0;
  let seguirComprando = true;

  while (seguirComprando) {
    let eleccion = prompt(
      "Elegí un producto:\n1 - " + productos[0] + " - $" + precios[0] +
      "\n2 - " + productos[1] + " - $" + precios[1] +
      "\n3 - " + productos[2] + " - $" + precios[2]
    );

    let cantidad = prompt("¿Cuántas unidades querés comprar?");
    let subtotal = calcularTotal(eleccion, cantidad);
    totalCompra += subtotal;

    alert("Agregaste " + cantidad + " unidad(es) de " + productos[eleccion - 1] +
          "\nSubtotal: $" + subtotal +
          "\nTotal acumulado: $" + totalCompra);

    console.log("Producto: " + productos[eleccion - 1]);
    console.log("Cantidad: " + cantidad);
    console.log("Subtotal: $" + subtotal);
    console.log("Total acumulado: $" + totalCompra);

    let continuar = prompt("¿Querés comprar otro producto? (si/no)");
    if (continuar.toLowerCase() !== "si") {
      seguirComprando = false;
    }
  }

  return totalCompra;
}

if (edad >= 18) {
  alert("Bienvenido al mundo de UMBRA, donde el terror acecha en la oscuridad");
  let total = comprarProductos();

  let mensajeFinal = 
    "El total de la compra es de: $" + total + "\n\n" +
    "¡Gracias por tu compra!\n" +
    "Tu pedido será procesado pronto.\n\n" +
    "Seguinos en Instagram: @umbra.escritos\n" +
    "y enterate de novedades, lanzamientos y más contenido exclusivo.";

  alert(mensajeFinal);
  console.log(mensajeFinal);

} else {
  alert("Lo sentimos, el contenido es exclusivo para mayores de 18 años");
  alert("Pero podés visitar nuestro instagram @umbra.escritos para ver contenido exclusivo");
}