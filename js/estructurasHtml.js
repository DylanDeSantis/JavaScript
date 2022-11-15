const estructura = producto => {
	return `<div class="card">
              <h3 class="tituloMercaderia" >${producto.nombre}</h3>
              <img class="imagenProd" src="${producto.img}" alt="">
              <p class="preciosProductos" >$${producto.precio}</p>
              <div class="card-button">
                  <buttom class="button button-outline button-add" id="${producto.nombre}" title="Vas a agregar '${producto.nombre}' al carrito">Agregar</buttom>
              </div>
          </div>`;
};
