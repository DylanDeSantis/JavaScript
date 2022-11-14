const inputNombre = document.querySelector("#inputNombre")
const inputEmail = document.querySelector("#inputEmail")
const inputTelefono = document.querySelector("#inputTelefono")
const btnEnviar = document.querySelector("button.button")
const almacenarDatos = () => {
    if (inputNombre.value.trim() !== "") { localStorage.setItem("inputNombre", inputNombre.value) }
    if (inputEmail.value.trim() !== "") { localStorage.setItem("inputEmaile", inputEmail.value) }
    if (inputTelefono.value.trim() !== "") { localStorage.setItem("inputTelefono", inputTelefono.value) }
}
const recuperarDatos = () => {
    if (localStorage.getItem("inputNombre")) { inputNombre.value = localStorage.getItem("inputNombre")}
    if (localStorage.getItem("inputEmail")) { inputEmail.value = localStorage.getItem("inputEmail")}
    if (localStorage.getItem("inputTelefono")) { inputTelefono.value = localStorage.getItem("inputTelefono")}
}
