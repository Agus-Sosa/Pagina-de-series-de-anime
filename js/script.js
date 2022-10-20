

localStorage.setItem('suscripcion1', JSON.stringify({nombre: 'Basica', precio: 10}))
localStorage.setItem('suscripcion2', JSON.stringify({nombre: 'Estandar', precio: 15}))
localStorage.setItem('suscripcion3', JSON.stringify({nombre: 'Premium', precio: 20}))

let suscripcion1 = JSON.parse(localStorage.getItem('suscripcion1'))
let suscripcion2 = JSON.parse(localStorage.getItem('suscripcion2'))
let suscripcion3 = JSON.parse(localStorage.getItem('suscripcion3'))


let preciototal = 0

let ImpuestosDolar = 1.75
let PrecioDolar = 150

function precio(precio, precioDolar, impuestos) {
    return Math.trunc(precio * precioDolar) * impuestos 
}


let confirmarSub = document.getElementById('confirmar-sub')

let botonBasico = document.getElementById('boton-basico')
botonBasico.addEventListener('click', eventoBasico)

let botonEstandar = document.getElementById('boton-estandar')
botonEstandar.addEventListener('click', eventoEstandar)

let botonPremium = document.getElementById('boton-premium')
botonPremium.addEventListener('click', eventoPremium)

let cancelarEvento = document.getElementById('cancelar-evento')

function render(precioSub) {
    confirmarSub.innerHTML = ''
    let precioArs  =  precio(precioSub, PrecioDolar, ImpuestosDolar)
    let mostarEvento = document.createElement('div')

    mostarEvento.className = 'confirmar-sub'
    mostarEvento.innerHTML = `<h3>¿Desea confirmar la suscripcion?</h3> <p>Precio Total $ ${precioArs} <p>Actualmente se aplican los siguientes impuestos a la factura de Netflix: IVA servicio digital (21%), impuesto País (8%), Ganancias o Bienes Personales (45%).</p>  `
    mostarEvento.setAttribute('id', 'evento-sub')

    let botonCancelar = document.createElement('button')
    botonCancelar.className = 'confirmar-sub'
    botonCancelar.innerHTML = 'Cerrar'
    
    botonCancelar.addEventListener('click', () => {
        confirmarSub.innerHTML = ''
    },  )

    let botonConfirmar = document.createElement('button')
    botonConfirmar.className = 'confirmar-sub'
    botonConfirmar.innerText = 'Confirmar'
    botonConfirmar.addEventListener('click', ()=> {
        botonConfirmar.innerText = 'Cargando...'
        setTimeout ( () => {confirmarSub.innerHTML = ''}, 2000)
        setTimeout ( () => {Toastify({
                text: "Compra Realizada con exito",
                className: "info-sub",
                style: {
                }
            }).showToast();}, 2500)
        
    })
    mostarEvento.append(botonConfirmar)
    mostarEvento.append(botonCancelar)
    confirmarSub.append(mostarEvento)
    
}





function eventoBasico () {
    render(suscripcion1.precio)

}

function eventoEstandar () {
    render(suscripcion2.precio)
}

function eventoPremium() {
    render(suscripcion3.precio)
}


function CompraRealizada (){
    let alertaCompra = document.createElement('div')
    alertaCompra.className = 'alerta-compra'
    alertaCompra.innerHTML = '<p>Compra Realizada</p>'

}


// cancelarEvento.addEventListener('click', () => {
//     close(eventoBasico())
// })

// cancelarEvento.addEventListener('click', () => {

//     document.removeEventListener('click', eventoBasico)
//     cancelarEvento.innerText = 'X'
//     confirmarSub.append(cancelarEvento)

//     cancelarEvento.type = 'reset'
// }) 


// function botonDeSub (eventoSub) {
//     eventoSub = document.getElementById('confirm-sub')
// }

// let seccionSub = document.getElementById('confirm-sub')

// let botonSub = document.getElementById('boton-compra')

// let body = document.getElementsByTagName('body')

// botonSub = document.addEventListener('click',clickSub)

// function render() {
//     seccionSub.innerHTML=''
//     let confirmacionSub = document.createElement('div')
//     confirmacionSub.className = 'confirmar-sub'
//     confirmacionSub.innerHTML = `<h3>¿Desea confirmar la suscripcion?</h3> <p>Precio Total $${Suscripcion1.precio} </p><button>Confirmar</button>`
//     body.className = 'evento-body'
//     seccionSub.append(confirmacionSub)
// }

// botonSub.addEventListener('click', botonDeCompra)

// function botonDeCompra () {
    
// }

// function clickSub () {
//     render()
// }


// alert('Estas son las suscripciones: \n - ' + listaSuscripciones.join('\n - '))


// // let Respuesta = prompt('Seleccion que suscripcion desea acceder o presione ESC: \n  - ' + listaSuscripciones.join('\n - ') + ' \n - ESC').toUpperCase()


// while(Respuesta.toUpperCase() != 'ESC') {

//     if(Respuesta == 'BASICA') {
//     precio(Suscripcion1.precio, PrecioDolar, ImpuestosDolar)
//     alert('Precio total con impuestos inlcuidos: ' + preciototal + ' ARS')
        
//     // let confirmar =  prompt('Desea confirmar la suscripcion? \n - SI\n - NO ')

//     if (confirmar.toUpperCase() == 'SI') {
//         alert('Compra Relizada')
//     }

//     // Respuesta = prompt('Seleccion que subscripcion desea acceder o presione ESC: \n - Basica - 9.99\n - Estandar - 15.99\n - Premium - 19.99\n - ESC').toUpperCase()

//     // break
//     }
    


//     else if(Respuesta == 'ESTANDAR') {

//         precio(Suscripcion2.precio, PrecioDolar, ImpuestosDolar)
//         alert('Precio total con impuesto incluidos: ' + preciototal + ' ARS')

//         let confirmar = prompt('Desea confirmar la suscripcion? \n - SI\n - NO')

//         if(confirmar.toUpperCase() == 'SI') {
//             alert('Compra realizada')
//         }

//         Respuesta = prompt('Seleccion que subscripcion desea acceder o presione ESC: \n - Basica - 9.99\n - Estandar - 15.99\n - Premium - 19.99\n - ESC').toUpperCase()

//         // break

//     }

//     else if(Respuesta == 'PREMIUM') {
        
//         precio(Suscripcion3.precio, PrecioDolar, ImpuestosDolar)
//         alert('Precio total con impuestos inlcuidos ' + preciototal)

//         let confirmar = prompt('Desea confirmar la suscripcion? \n - SI\n - NO')
        
//         if(confirmar.toUpperCase() == 'SI') {

//             alert('Compra realizada')
            
//         }
        
//         Respuesta = prompt('Seleccion que subscripcion desea acceder o presione ESC: \n - Basica - 9.99\n - Estandar - 15.99\n - Premium - 19.99\n - ESC').toUpperCase()

//         // break

        
//     }

    
    


// }
