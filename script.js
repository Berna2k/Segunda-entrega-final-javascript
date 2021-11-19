let id = 1;
let clientes = []
let formCliente = document.getElementById("formCliente")
let botonClientes = document.getElementById("botonMostrarClientes")
let divClientes = document.getElementById("divClientes")


class Cliente{
    constructor(id, nombre, email, direccion, numTelefono) {
        this.id = id
        this.nombre = nombre;
        this.email = email;
        this.direccion = direccion;
        this.numTelefono = numTelefono;
    }
}

// formulario para que el usuario genere los clientes

formCliente.addEventListener("submit", (e) => {
    e.preventDefault()
    
    let formDatos = new FormData(e.target)
    console.log(e.target)
    console.log(formDatos.get("nombre"))
    console.log(formDatos.get("email"))
    console.log(formDatos.get("direccion"))
    console.log(formDatos.get("numTelefono"))

    const cliente = new Cliente(id, formDatos.get("nombre"), formDatos.get("email"), formDatos.get("direccion"), formDatos.get("numTelefono"))
    id++
    console.log(cliente)
    clientes.push(cliente)
    localStorage.setItem('clientes',JSON.stringify(clientes))
    formCliente.reset()
})

// boton para mostrar las cards

botonClientes.addEventListener("click", () => {
    let clientesParseados = JSON.parse(localStorage.getItem('clientes'))
    clientesParseados.forEach((cliente) => {
        divClientes.innerHTML += `
        <div class="card" style="width: 18rem;" id="cliente${cliente.id}">
            <div class="card-body">
                <h5 class="card-title">Cliente N°${cliente.id}</h5>
                <p>Nombre: ${cliente.nombre}</p>
                <p>Email: ${cliente.email}</p>
                <p>direccion: ${cliente.direccion}</p>
                <p>Telefono: ${cliente.numTelefono}</p>
                <button type="button" class="btn btn-danger" id="boton${cliente.id}">Eliminar</button>
            </div>
        </div>
    `
    })
    

// boton para eliminar las cards

clientesParseados.forEach((cliente) => {
    document.getElementById(`boton${cliente.id}`).addEventListener("click", () => {
        divClientes.removeChild(document.getElementById(`cliente${cliente.id}`))
        clientesParseados.splice(cliente.id)
        console.log(clientesParseados)
        console.log(`Cliente ${cliente.nombre} eliminado` )
        localStorage.setItem('clientes', JSON.stringify(clientesParseados))
    })
})

})


// input para generar un nombre de usuario
document.getElementById("inputUsuario").addEventListener("change", () => {
    let parrafo1 = document.getElementById("parrafoUsuario")
    parrafo1.innerText = "¡Usuario valido!"
}) 