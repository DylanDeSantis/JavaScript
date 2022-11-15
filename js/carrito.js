const carritoContainer = document.getElementById("carritoContainer");
const productitos = JSON.parse(localStorage.getItem("carrito"));
function cartUser() {
	carritoContainer.innerHTML = "";
	carrito.forEach(prod => {
		const div = document.createElement("div");
		div.classList.add("cartCard");
		div.innerHTML = `
		<img class="imgCarrito" src='${prod.img}'class="imagenProd"/>
        <div class="divContentCart">
        	<h3 id="${prod.nombre}" >${prod.nombre}</h3>
        	<h1>${prod.cantidad}</h1>
        </div>
			<button class="btnDelete" id="${prod.nombre}"><img src='../archivos html/icons8-eliminar.svg'/></button>
        `;
		carritoContainer.appendChild(div);
	});
	const btnDelete = document.querySelectorAll(".btnDelete");
	btnDelete.forEach(el => {
		el.addEventListener("click", () => {
			carrito = carrito.filter(prod => prod.nombre !== el.id);
			cartUser();
		});
	});
}
const agregarAlCarrito = dispositivo => {
	let resultado = productos.find(producto => producto.nombre === dispositivo);
	const existe = carrito.find(el => el.nombre === dispositivo);
	if (!existe) {
		carrito.push(resultado);
	} else {
		carrito = carrito.map(el =>
			el.nombre === existe.nombre
				? { ...el, cantidad: el.cantidad + 1 }
				: el
		);
	}
	toast(`Tu ${dispositivo}, se agrego al carrito.`);
	guardarCarrito();
	cartUser();
	actualizarPrecio();
};
const guardarCarrito = () => {
	if (carrito.length > 0) {
		localStorage.setItem("carrito", JSON.stringify(carrito));
	}
};
const buscador = () => {
	const texto = formulario.value.toLowerCase();
	for (let producto of productos) {
		let nombre = producto.nombre.toLowerCase();
		if (nombre.includes(texto)) {
			buscador.innerHTML = "";
			resultado.innerHTML += `
            <li>${producto.nombre} - ${producto.precio}</li>`;
		}
	}
};
function actualizarPrecio() {
	valorTotal.innerHTML = "";
	valorTotal.innerHTML = carrito
		.reduce((acc, el) => acc + el.precio, 0)
		.toFixed(3);
}
actualizarPrecio();

