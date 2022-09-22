let Suscripcion1 = 'Basica'
let precioSubscripcion = 10

let Suscripcion2 = 'Estandar'
let precioSubscripcion2 = 15.99

let Suscripcion3 = 'Premium'
let precioSubscripcion3 = 19.99

let ImpuestosDolar = 1.75 
let PrecioDolar = 150

function precio(precio, precioDolar, impuestos) {
    preciototal = (precio * precioDolar) * impuestos 
}

alert('Estas son las suscripciones:\n - Basica\n - Estandar\n - Premium\n')

let Respuesta = prompt('Seleccion que subscripcion desea acceder o presione ESC: \n - Basica - 9.99\n - Estandar - 15.99\n - Premium - 19.99\n - ESC')

while(Respuesta.toUpperCase() != 'ESC') {

    if(Respuesta == 'Basica') {
    
    precio(precioSubscripcion, PrecioDolar, ImpuestosDolar)
    alert('Precio total con impuestos inlcuidos: ' + preciototal + ' ARS')
        
    let confirmar =  prompt('Desea confirmar la suscripcion? \n - SI\n - NO ')

    if (confirmar == 'SI') {
        alert('Compra Relizada')
    }
        
    break
    }
    


    else if(Respuesta == 'Estandar') {

        precio(precioSubscripcion2, PrecioDolar, ImpuestosDolar)
        alert('Precio total con impuesto incluidos: ' + preciototal + ' ARS')

        let confirmar = prompt('Desea confirmar la suscripcion? \n - SI\n - NO')

        if(confirmar.toLocaleUpperCase() == 'SI') {
            alert('Compra realizada')
        }
        break

    }

    else if(Respuesta == 'Premium') {
        
        precio(precioSubscripcion3, PrecioDolar, ImpuestosDolar)
        alert('Precio total con impuestos inlcuidos ' + preciototal)

        let confirmar = prompt('Desea confirmar la suscripcion? \n - SI\n - NO')
        
        if(confirmar.toUpperCase() == 'SI') {
            alert('Compra realizada')
        }

        break
        
    }



}
