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

function getCamion() {
    const id = getIdFromUrl()
    const url = `http://localhost:5000/camion/${id}`

    fetch(url).then(res => { return res.json() }).then(object => {
        document.getElementById("matricula").value = object.matriculaCamion
        document.getElementById("descripcion").value = object.descripcion
        document.getElementById("conductor").value = object.conductor
       
        document.getElementById("form").className = ""
        document.getElementById('spinner').className = "d-none"

    })

}


function listarCamiones() {
    let url = 'http://localhost:5000/camion';
    fetch(url, {})
        .then(response => response.json())
        .then(data => {

            let camiones = document.getElementById('camiones')

            let html = ''
            data.map(camio => {
                html += `
                    <tr id="${camio.id}">
                        <td>${camio.id}</td>
                        <td class="matricula">${camio.matriculaCamion}</td>
                        <td class="descripcion">${camio.descripcion}</td>
                        <td class="conductor">${camio.conductor}</td>
                        <td>
                            <a type="button" href="/camiones/update/${camio.id}" class="btn btn-outline-light btn-sm"><i class="bi bi-pencil-square text-dark"></i></a>
                            <button type="button" class="btn btn-outline-light btn-sm" onclick="eliminarCamion('${camio.id}')"><i class="bi bi-trash3-fill text-danger"></i></button>
                        </td>
                    </tr>
                `
            })

            camiones.innerHTML = html
            document.getElementById('spinner').style.display = 'none'
        });
}


function crearCamion() {
    // Deshabilitar botón
    disableButton(id = "guardar")

    // Preparar data
    const url = 'http://localhost:5000/camion/create'
    const matriculaCamion = document.getElementById("matricula")
    const descripcion = document.getElementById("descripcion")
    const conductor = document.getElementById("conductor")
    

    const data = {
        'matriculaCamion': matriculaCamion.value,
        'descripcion': descripcion.value,
        'conductor': conductor.value,
    }

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        location.href = "/camiones"
    }).catch(error => {
        console.log(error);
        document.getElementById("error").innerText = "Ocurrió un error " + error
    })
}

function editarCamion() {
    // Deshabilitar botón
    disableButton(id = "guardar")

    // Preparar data
    const camion_id = getIdFromUrl()
    const url = `http://localhost:5000/camion/update/${camion_id}`
    const matriculaCamion = document.getElementById("matricula")
    const descripcion = document.getElementById("descripcion")
    const conductor = document.getElementById("conductor")
    

    const data = {
        'matriculaCamion': matriculaCamion.value,
        'descripcion': descripcion.value,
        'conductor': conductor.value,
        
    }

    fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        location.href = "/camiones"
    }).catch(error => {
        console.log(error);
        document.getElementById("error").innerText = "Ocurrió un error " + error
    })
}

function eliminarCamion(id) {
    const item = document.getElementById(id)
    const M = item.querySelector('.matricula').innerText
    const D = item.querySelector('.descripcion').innerText

    if (confirm(`¿Desea eliminar el camion"${M} ${D}"?`)) {
        const url = `http://localhost:5000/camion/delete/${id}`

        fetch(url, {
            method: 'DELETE'
        }).then(response => response.json()).then(data => {
            location.href = "/camiones"
        }).catch(error => {
            console.log(error);
            document.getElementById("error").innerText = "Ocurrió un error " + error
        })
    }
}


