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

function getProvincia() {
    const id = getIdFromUrl()
    const url = `http://localhost:5000/provincia/${id}`

    fetch(url).then(res => { return res.json() }).then(object => {
        document.getElementById("codigoProvincia").value = object.codigoProvincia
        document.getElementById("nombre").value = object.nombre
        document.getElementById("ciudad").value = object.ciudad
        document.getElementById("barrio").value = object.barrio
        

        document.getElementById("form").className = ""
        document.getElementById('spinner').className = "d-none"

    })

}


function listarProvincias() {
    let url = 'http://localhost:5000/provincia';
    fetch(url, {})
        .then(response => response.json())
        .then(data => {

            let provincias = document.getElementById('provincias')

            let html = ''
            data.map(prov => {
                html += `
                    <tr id="${prov.id}">
                        <td>${prov.id}</td>
                        <td class="codigoProvincia">${prov.codigoProvincia}</td>
                        <td class="nombre">${prov.nombre}</td>
                        <td class="ciudad">${prov.ciudad}</td>
                        <td>${prov.barrio}</td>
                        <td>
                            <a type="button" href="/provincias/update/${prov.id}" class="btn btn-outline-light btn-sm"><i class="bi bi-pencil-square text-dark"></i></a>
                            <button type="button" class="btn btn-outline-light btn-sm" onclick="eliminarProvincia('${prov.id}')"><i class="bi bi-trash3-fill text-danger"></i></button>
                        </td>
                    </tr>
                `
            })

           provincias.innerHTML = html
            document.getElementById('spinner').style.display = 'none'
        });
}


function crearProvincia() {
    // Deshabilitar botón
    disableButton(id = "guardar")

    // Preparar data
    const url = 'http://localhost:5000/provincia/create'
    const codigoProvincia = document.getElementById("codigoProvincia")
    const nombre = document.getElementById("nombre")
    const ciudad = document.getElementById("ciudad")
    const barrio = document.getElementById("barrio")
    

    const data = {
        'codigoProvincia': codigoProvincia.value,
        'nombre': nombre.value,
        'ciudad': ciudad.value,
        'barrio': barrio.value,
        
    }

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        location.href = "/provincias"
    }).catch(error => {
        console.log(error);
        document.getElementById("error").innerText = "Ocurrió un error " + error
    })
}

function editarProvincia() {
    // Deshabilitar botón
    disableButton(id = "guardar")

    // Preparar data
    const provincia_id = getIdFromUrl()
    const url = `http://localhost:5000/provincia/update/${provincia_id}`
    const codigoProvincia = document.getElementById("codigoProvincia")
    const nombre = document.getElementById("nombre")
    const ciudad = document.getElementById("ciudad")
    const barrio = document.getElementById("barrio")
   
    const data = {
        'codigoProvincia': codigoProvincia.value,
        'nombre': nombre.value,
        'ciudad': ciudad.value,
        'barrio': barrio.value,
        
    }

    fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        location.href = "/provincias"
    }).catch(error => {
        console.log(error);
        document.getElementById("error").innerText = "Ocurrió un error " + error
    })
}

function eliminarProvincia(id) {
    const item = document.getElementById(id)
    const codigoP = item.querySelector('.codigoProvincia').innerText
    const nombre = item.querySelector('.nombre').innerText

    if (confirm(`¿Desea eliminar la Provincia"${codigoP} ${nombre}"?`)) {
        const url = `http://localhost:5000/provincia/delete/${id}`

        fetch(url, {
            method: 'DELETE'
        }).then(response => response.json()).then(data => {
            location.href = "/provincias"
        }).catch(error => {
            console.log(error);
            document.getElementById("error").innerText = "Ocurrió un error " + error
        })
    }
}


