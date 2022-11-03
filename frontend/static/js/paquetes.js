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

function getPaquete() {
    const id = getIdFromUrl()
    const url = `http://localhost:5000/paquete/${id}`

    fetch(url).then(res => { return res.json() }).then(object => {
        document.getElementById("codigoPaquete").value = object.codigoPaquete
        document.getElementById("descripcion").value = object.descripcion
        document.getElementById("destinatario").value = object.destinatario
        document.getElementById("direccionDestinatario").value = object.direccionDestinatario
        

        document.getElementById("form").className = ""
        document.getElementById('spinner').className = "d-none"

    })

}


function listarPaquetes() {
    let url = 'http://localhost:5000/paquete';
    fetch(url, {})
        .then(response => response.json())
        .then(data => {

            let paquetes = document.getElementById('paquetes')

            let html = ''
            data.map(pack => {
                html += `
                    <tr id="${pack.id}">
                        <td>${pack.id}</td>
                        <td class="codigoPaquete">>${pack.codigoPaquete}</td>
                        <td class="descripcion">${pack.descripcion}</td>
                        <td class="destinatario">${pack.destinatario}</td>
                        <td>${pack.direccionDestinatario}</td>
                        <td>
                            <a type="button" href="/paquetes/update/${pack.id}" class="btn btn-outline-light btn-sm"><i class="bi bi-pencil-square text-dark"></i></a>
                            <button type="button" class="btn btn-outline-light btn-sm" onclick="eliminarPaquete('${pack.id}')"><i class="bi bi-trash3-fill text-danger"></i></button>
                        </td>
                    </tr>
                `
            })

            paquetes.innerHTML = html
            document.getElementById('spinner').style.display = 'none'
        });
}


function crearPaquete() {
    // Deshabilitar botón
    disableButton(id = "guardar")

    // Preparar data
    const url = 'http://localhost:5000/paquete/create'
    const codigoPaquete = document.getElementById("codigoPaquete")
    const descripcion = document.getElementById("descripcion")
    const destinatario = document.getElementById("destinatario")
    const direccionDestinatario = document.getElementById("direccionDestinatario")
    

    const data = {
        'codigoPaquete': codigoPaquete.value,
        'descripcion': descripcion.value,
        'destinatario': destinatario.value,
        'direccionDestinatario': direccionDestinatario.value,
        
    }

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        location.href = "/paquetes"
    }).catch(error => {
        console.log(error);
        document.getElementById("error").innerText = "Ocurrió un error " + error
    })
}

function editarPaquete() {
    // Deshabilitar botón
    disableButton(id = "guardar")

    // Preparar data
    const paquete_id = getIdFromUrl()
    const url = `http://localhost:5000/paquete/update/${paquete_id}`
    const codigoPaquete = document.getElementById("codigoPaquete")
    const descripcion = document.getElementById("descripcion")
    const destinatario = document.getElementById("destinatario")
    const direccionDestinatario = document.getElementById("direccionDestinatario")
   
    const data = {
        'codigoPaquete': codigoPaquete.value,
        'descripcion': descripcion.value,
        'destinatario': destinatario.value,
        'direccionDestinatario': direccionDestinatario.value,
        
    }

    fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        location.href = "/paquetes"
    }).catch(error => {
        console.log(error);
        document.getElementById("error").innerText = "Ocurrió un error " + error
    })
}

function eliminarPaquete(id) {
    const item = document.getElementById(id)
    const codigo = item.querySelector('.codigoPaquete').innerText
    const desc = item.querySelector('.descripcion').innerText

    if (confirm(`¿Desea eliminar el paquete "${codigo} ${desc}"?`)) {
        const url = `http://localhost:5000/paquete/delete/${id}`

        fetch(url, {
            method: 'DELETE'
        }).then(response => response.json()).then(data => {
            location.href = "/paquetes"
        }).catch(error => {
            console.log(error);
            document.getElementById("error").innerText = "Ocurrió un error " + error
        })
    }
}


