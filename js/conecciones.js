const container = document.querySelector("div.containerProductos")
const iconoCarrito = document.querySelector("#iconoAbrirCarrito")
const carritoDeCompras = document.querySelector(".buy")
const cerrarCarrito = document.querySelector("#cerrarCarrito")
const formulario = document.querySelector("#formulario")
const boton = document.querySelector("#botonDelBuscador")
const resultado = document.querySelector("#resultado")
boton.addEventListener("click", buscador)
btnEnviar.addEventListener("click", almacenarDatos)
document.addEventListener("DOMContentLoaded", recuperarDatos)
