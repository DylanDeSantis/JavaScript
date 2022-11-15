iconoCarrito.onclick = () => {
	carritoDeCompras.classList.add("active");
};
cerrarCarrito.onclick = () => {
	carritoDeCompras.classList.remove("active");
};
const activarBotonesAdd = () => {
	const botonesAdd = document.querySelectorAll(
		".button.button-outline.button-add"
	);
	botonesAdd.forEach(btn => {
		btn.addEventListener("click", () => {
			agregarAlCarrito(btn.id);
		});
	});
};
const cargarMisProductos = () => {
	container.innerHTML = "";
	productos.forEach(producto => {
		container.innerHTML += estructura(producto);
	});
	activarBotonesAdd();
};
cargarMisProductos();
const toast = mensaje => {
	Toastify({
		text: mensaje,
		duration: 2000,
		close: true,
		gravity: "bottom",
		position: "right",
		stopOnFocus: true,
		style: {
			background: "linear-gradient(to right, #C133FF, #8D33FF)",
		},
	}).showToast();
};
