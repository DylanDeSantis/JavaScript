
function ready(){
    let removerProd = document.getElementsByClassName("borrarProdCarrito")
    console.log(removerProd)
    for (let i = 0; i<removerProd.length; i++){
        let botonRem = removerProd[i]
        botonRem.addEventListener('click', removerProd)
    }
}
function removerProd(event){
    let botonApretado = event.target
    botonApretado.parentElement.remove(event)
}




const agregarAlCarrito = (dispositivo) => {
    let resultado = productos.find(producto => producto.nombre === dispositivo)
    if (resultado !== undefined) {
        carrito.push(resultado)
        guardarCarrito()
        toast(`Tu ${dispositivo}, se agrego al carrito.`)
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
            <li>${producto.nombre} - ${producto.precio}</li>`}}
}








