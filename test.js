/*
Ejecutar un fetch al fakestoreapi y desplegar los productos dinamicamente en el HTML
con un card de bootstrap que contenga, la imagen del producto,titulo, el precio y categoria.

luego generar botones dinamicamente de cada una de las categorias que filtraran
los productos obtenidos

*/
let productos = [];

function init() {
  obtenerProductos();

}

init();

function obtenerProductos() {
  fetch('https://fakestoreapi.com/products?limit=5')
    .then(res => res.json())
    .then(json => productos = json);

}
