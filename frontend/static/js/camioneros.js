function disableButton(id) {
    const button = document.getElementById(id)
    button.className = button.className + " disabled"
    button.setAttribute('disabled', 'disabled')
    button.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>'
}




function getIdFromUrl() {
    const route = new URL(window.location).pathname
    const pathArray = route.split('/')
    return pathArray[pathArray.length - 1]
}

// CRUD

function getCamionero() {
    const id = getIdFromUrl()
    const url = `http://localhost:5000/camioneros/${id}`

    fetch(url).then(res => { return res.json() }).then(object => {
        document.getElementById("nombre").value = object.nombre
        document.getElementById("apellido").value = object.apellido
        document.getElementById("dni").value = object.dni
        document.getElementById("direccion").value = object.direccion
        document.getElementById("salario").value = object.salario
        document.getElementById("poblacion").value = object.poblacion
        document.getElementById("telefono").value = object.telefono

        document.getElementById("form").className = ""
        document.getElementById('spinner').className = "d-none"

    })

}


function listarCamionero() {
    let url = 'http://localhost:5000/camioneros';
    fetch(url, {})
        .then(response => response.json())
        .then(data => {

            let camioneros = document.getElementById('camioneros')

            let html = ''
            data.map(camio => {
                html += `
                    <tr id="${camio.id}">
                        <td>${camio.id}</td>
                        <td>${camio.dni}</td>
                        <td class="nombre">${camio.nombre}</td>
                        <td class="apellido">${camio.apellido}</td>
                        <td>${camio.direccion}</td>
                        <td>${camio.salario}</td>
                        <td>${camio.poblacion}</td>
                        <td>${camio.telefono}</td>
                        <td>
                            <a type="button" href="/camioneros/update/${camio.id}" class="btn btn-outline-light btn-sm"><i class="bi bi-pencil-square text-dark"></i></a>
                            <button type="button" class="btn btn-outline-light btn-sm" onclick="eliminarCamionero('${camio.id}')"><i class="bi bi-trash3-fill text-danger"></i></button>
                        </td>
                    </tr>
                `
            })

            camioneros.innerHTML = html
            document.getElementById('spinner').style.display = 'none'
        });
}


function crearCamionero() {
    // Deshabilitar botón
    disableButton(id = "guardar")

    // Preparar data
    const url = 'http://localhost:5000/camioneros/create'
    const nombre = document.getElementById("nombre")
    const apellido = document.getElementById("apellido")
    const dni = document.getElementById("dni")
    const direccion = document.getElementById("direccion")
    const salario = document.getElementById("salario")
    const poblacion = document.getElementById("poblacion")
    const telefono = document.getElementById("telefono")

    const data = {
        'nombre': nombre.value,
        'apellido': apellido.value,
        'dni': dni.value,
        'direccion': direccion.value,
        'salario': salario.value,
        'poblacion': poblacion.value,
        'telefono': telefono.value
    }

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        location.href = "/camioneros"
    }).catch(error => {
        console.log(error);
        document.getElementById("error").innerText = "Ocurrió un error " + error
    })
}

function editarCamionero() {
    // Deshabilitar botón
    disableButton(id = "guardar")

    // Preparar data
    const camionero_id = getIdFromUrl()
    const url = `http://localhost:5000/camioneros/update/${camionero_id}`
    const nombre = document.getElementById("nombre")
    const apellido = document.getElementById("apellido")
    const dni = document.getElementById("dni")
    const direccion = document.getElementById("direccion")
    const salario = document.getElementById("salario")
    const poblacion = document.getElementById("poblacion")
    const telefono = document.getElementById("telefono")

    const data = {
        'nombre': nombre.value,
        'apellido': apellido.value,
        'dni': dni.value,
        'direccion': direccion.value,
        'salario': salario.value,
        'poblacion': poblacion.value,
        'telefono': telefono.value
    }

    fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        location.href = "/camioneros"
    }).catch(error => {
        console.log(error);
        document.getElementById("error").innerText = "Ocurrió un error " + error
    })
}

function eliminarCamionero(id) {
    const item = document.getElementById(id)
    const nombre = item.querySelector('.nombre').innerText
    const apellido = item.querySelector('.apellido').innerText

    if (confirm(`¿Desea eliminar el cliente "${nombre} ${apellido}"?`)) {
        const url = `http://localhost:5000/camioneros/delete/${id}`

        fetch(url, {
            method: 'DELETE'
        }).then(response => response.json()).then(data => {
            location.href = "/camioneros"
        }).catch(error => {
            console.log(error);
            document.getElementById("error").innerText = "Ocurrió un error " + error
        })
    }
}


