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

function getEnvio() {
    const id = getIdFromUrl()
    const url = `http://localhost:5000/envio/${id}`

    fetch(url).then(res => { return res.json() }).then(object => {
        document.getElementById("provinciaId").value = object.provinciaId
        document.getElementById("paqueteId").value = object.paqueteId
        
        

        document.getElementById("form").className = ""
        document.getElementById('spinner').className = "d-none"

    })

}


function listarEnvios() {
    let url = 'http://localhost:5000/envio';
    fetch(url, {})
        .then(response => response.json())
        .then(data => {

            let envios = document.getElementById('envios')

            let html = ''
            data.map(Shipping => {
                html += `
                    <tr id="${Shipping.id}">
                        <td>${Shipping.id}</td>
                        <td class="codigoEnvio">${Shipping.codigoEnvio}</td>
                        <td class="descripcion">${Shipping.descripcion}</td>
                        <td class="destinatario">${Shipping.destinatario}</td>
                       
                        <td>
                            <a type="button" href="/envios/update/${Shipping.id}" class="btn btn-outline-light btn-sm"><i class="bi bi-pencil-square text-dark"></i></a>
                            <button type="button" class="btn btn-outline-light btn-sm" onclick="eliminarEnvio('${Shipping.id}')"><i class="bi bi-trash3-fill text-danger"></i></button>
                        </td>
                    </tr>
                `
            })

            envios.innerHTML = html
            document.getElementById('spinner').style.display = 'none'
        });
}


function crearEnvio() {
    // Deshabilitar botón
    disableButton(id = "guardar")

    // Preparar data
    const url = 'http://localhost:5000/envio/create'
    const provinciaId = document.getElementById("provinciaId")
    const paqueteId = document.getElementById("paqueteId")
    

    const data = {
        'provinciaId': provinciaId.value,
        'paqueteId': paqueteId.value
    }    
        
    

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        location.href = "/envios"
    }).catch(error => {
        console.log(error);
        document.getElementById("error").innerText = "Ocurrió un error " + error
    })
}

function editarEnvio() {
    // Deshabilitar botón
    disableButton(id = "guardar")

    // Preparar data
    const envio_id = getIdFromUrl()
    const url = `http://localhost:5000/envio/update/${envio_id}`
    const provinciaId = document.getElementById("codigoEnvio")
    const paqueteId = document.getElementById("codigoEnvio")
    
   
    const data = {
        'provinciaId': provinciaId.value,
        'paqueteId': paqueteId.value
    }    
         
   

    fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        location.href = "/envios"
    }).catch(error => {
        console.log(error);
        document.getElementById("error").innerText = "Ocurrió un error " + error
    })
}

function eliminarEnvio(id) {
    const item = document.getElementById(id)
    const codigo = item.querySelector('.codigoEnvio').innerText
    const desc = item.querySelector('.descripcion').innerText

    if (confirm(`¿Desea eliminar el envio "${codigo} ${desc}"?`)) {
        const url = `http://localhost:5000/envio/delete/${id}`

        fetch(url, {
            method: 'DELETE'
        }).then(response => response.json()).then(data => {
            location.href = "/envios"
        }).catch(error => {
            console.log(error);
            document.getElementById("error").innerText = "Ocurrió un error " + error
        })
    }
}


