
const estructura = (producto) => {
    return `<div class="card">
                <h3>${producto.nombre}</h3>
                <img src=${producto.img} alt="">
                <p>${producto.precio}</p>
                <div class="card-button">
                    <buttom class="button button-outline button-add" id="${producto.nombre}" title="Vas a agregar '${producto.nombre}' al carrito">Agregar</buttom>
                </div>
            </div>`
}
const activarBotonesAdd = () => {
    const botonesAdd = document.querySelectorAll(".button.button-outline.button-add")
    botonesAdd.forEach(btn => {
        btn.addEventListener("click", () => {
            agregarAlCarrito(btn.id)
        })
    })
}
const cargarMisProductos = () => {
    container.innerHTML = ""
    productos.forEach(producto => {
        container.innerHTML += estructura(producto)
    })
    activarBotonesAdd()
}
cargarMisProductos()
const toast = (mensaje)=>{
    Toastify({
        text: mensaje,
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to right, #C133FF, #8D33FF)",
        },
      }).showToast();
}
const agregarAlCarrito = (dispositivo) => {
    let resultado = productos.find(producto => producto.nombre === dispositivo)
    if (resultado !== undefined) {
        carrito.push(resultado)
        guardarCarrito()
        toast(`"${dispositivo}" Se agrego al carrito.`)
    }
}
const guardarCarrito = ()=>{
    if (carrito.length > 0){
        localStorage.setItem("carrito", JSON.stringify(carrito))  
    }
}
const recuperarCarrito = ()=>{
    if(localStorage.getItem("carrito")){
        let carritoRecuperado = JSON.parse(localStorage.getItem("carrito"))
            carritoRecuperado.forEach(producto => carrito.push(producto))
    } else {
        console.warn("No se encontro un carrito armado.")
    }
}
recuperarCarrito()
const buscador = () => {
    const texto = formulario.value.toLowerCase();
    for (let producto of productos) {
        let nombre = producto.nombre.toLowerCase();
        if (nombre.includes(texto)) {
            buscador.innerHTML = ""
            resultado.innerHTML += `
            <li>${producto.nombre} - ${producto.precio}</li>     
            `}
    }
    if (buscador.innerHTML === '') {
        resultado.innerHTML += `
            <li>Producto no encontrado...</li>
            `}
}
boton.addEventListener("click", buscador)