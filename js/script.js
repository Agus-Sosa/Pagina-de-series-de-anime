

localStorage.setItem('suscripcion1', JSON.stringify({nombre: 'Basica', precio: 10}))
localStorage.setItem('suscripcion2', JSON.stringify({nombre: 'Estandar', precio: 15}))
localStorage.setItem('suscripcion3', JSON.stringify({nombre: 'Premium', precio: 20}))

let suscripcion1 = JSON.parse(localStorage.getItem('suscripcion1'))
let suscripcion2 = JSON.parse(localStorage.getItem('suscripcion2'))
let suscripcion3 = JSON.parse(localStorage.getItem('suscripcion3'))


let preciototal = 0






let ImpuestosDolar = 1.75
let PrecioDolar = 150

function precio(precio, precioDolar, ) {
    return Math.trunc(precio * precioDolar)  
}



let confirmarSub = document.getElementById('confirmar-sub')

let botonBasico = document.getElementById('boton-basico')
botonBasico.addEventListener('click', eventoBasico)

let botonEstandar = document.getElementById('boton-estandar')
botonEstandar.addEventListener('click', eventoEstandar)

let botonPremium = document.getElementById('boton-premium')
botonPremium.addEventListener('click', eventoPremium)

let cancelarEvento = document.getElementById('cancelar-evento')
    let precioDolarHoy = ''

function render(precioSub) {
    
    confirmarSub.innerHTML = ''

    let titulo = document.createElement('h3')
    titulo.className = 'titulo-sub'
    titulo.innerText = '¿Desea confirmar la suscripcion?'

    
    let divContenedorDolar = document.createElement('div')
    divContenedorDolar.className = 'contenedor-dolar'
    

    let parrafoImpuestos = document.createElement('p')
    parrafoImpuestos.className = 'parrafo-impuestos'
    parrafoImpuestos.innerText = 'Actualmente se aplican los siguientes impuestos a la factura de Yunosha Anime: IVA servicio digital (21%), impuesto País (8%), Ganancias o Bienes Personales (45%).'


    function dolarHoy (){
        fetch('https://api.bluelytics.com.ar/v2/latest')
        .then(res => res.json())
        .then(data => 
           divContenedorDolar.innerText = '$ ' + precioSub *  JSON.stringify(data.oficial.value_sell) * ImpuestosDolar )
    }dolarHoy();
    
    
    let mostarEvento = document.createElement('div')



    mostarEvento.className = 'confirmar-sub'
    mostarEvento.setAttribute('id', 'evento-sub')

    let botonCancelar = document.createElement('button')
    botonCancelar.className = 'confirmar-sub'
    botonCancelar.innerHTML = 'Cerrar'
    
    botonCancelar.addEventListener('click',() =>{
        Swal.fire({
            title: 'Estas seguro que desea detener el proceso de suscripcion?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Detener',
            background: '#17181C',
            color: 'white',
            
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Proceso Cancelado!',
                    'El proceso fue detenido',
                    'success',
                    
                )
                
                confirmarSub.innerHTML = ''
            }

        })
    } )

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
    mostarEvento.append(titulo)
    mostarEvento.append(divContenedorDolar)
    mostarEvento.append(parrafoImpuestos)
    mostarEvento.append(botonConfirmar)
    mostarEvento.append(botonCancelar)
    confirmarSub.append(mostarEvento)
    
}




function eventoBasico () {
        botonBasico.innerText = 'Cargando...'
    setTimeout(() =>{
        botonBasico.innerText = 'Comprar'
        render(suscripcion1.precio)
    }, 1000)
        
}

function eventoEstandar () {
    botonEstandar.innerText = 'Cargando...'
    setTimeout(() =>{
        botonEstandar.innerText = 'Comprar'
        render(suscripcion2.precio)
    },1000)
}

function eventoPremium() {
    botonPremium.innerText = 'Cargando...'
    setTimeout(()=>{
        botonPremium.innerText = 'Comprar'
        render(suscripcion3.precio)
    }, 1000)
}


