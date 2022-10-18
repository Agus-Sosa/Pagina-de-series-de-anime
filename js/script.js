// JAVASCRIPT DEL PROYECTO
let Suscripcion1 = {
    nombre: 'Basica',
    precio: 10,
}

let Suscripcion2 = {
    
    nombre: 'Estandar',
    precio: 15,

}

let Suscripcion3 = {

    nombre: 'Premium',
    precio:  19.99,
}

let listaSuscripciones = [Suscripcion1, Suscripcion2, Suscripcion3]

let listaPrecio = [Suscripcion1.precio, Suscripcion2.precio, Suscripcion3.precio]



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
        window.location.replace('../pages/sub.html')
    },  )

    let botonConfirmar = document.createElement('button')
    botonConfirmar.className = 'confirmar-sub'
    botonConfirmar.innerText = 'Confirmar'
    botonConfirmar.addEventListener('click', ()=> {
        botonConfirmar.innerText = 'Cargando...'
        setTimeout (()=> {mostarEvento.innerText = 'Compra realizada con exito'}, 1000)
        
        setTimeout ( () => { window.location.replace('../pages/sub.html')}, 3000)
    })
    mostarEvento.append(botonConfirmar)
    mostarEvento.append(botonCancelar)
    confirmarSub.append(mostarEvento)
    
}





function eventoBasico () {
    render(Suscripcion1.precio)

}

function eventoEstandar () {
    render(Suscripcion2.precio)
}

function eventoPremium() {
    render(Suscripcion3.precio)
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
