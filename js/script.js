
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

let listaSuscripciones = [Suscripcion1.nombre, Suscripcion2.nombre, Suscripcion3.nombre]


let ImpuestosDolar = 1.75 
let PrecioDolar = 150

function precio(precio, precioDolar, impuestos) {
    preciototal = Math.trunc(precio * precioDolar) * impuestos 
}

alert('Estas son las suscripciones: \n - ' + listaSuscripciones.join('\n - '))

let Respuesta = prompt('Seleccion que suscripcion desea acceder o presione ESC: \n  - ' + listaSuscripciones.join('\n - ') + ' \n - ESC').toUpperCase()

while(Respuesta.toUpperCase() != 'ESC') {

    if(Respuesta == 'BASICA') {
    precio(Suscripcion1.precio, PrecioDolar, ImpuestosDolar)
    alert('Precio total con impuestos inlcuidos: ' + preciototal + ' ARS')
        
    let confirmar =  prompt('Desea confirmar la suscripcion? \n - SI\n - NO ')

    if (confirmar.toUpperCase() == 'SI') {
        alert('Compra Relizada')
    }

    Respuesta = prompt('Seleccion que subscripcion desea acceder o presione ESC: \n - Basica - 9.99\n - Estandar - 15.99\n - Premium - 19.99\n - ESC').toUpperCase()

    // break
    }
    


    else if(Respuesta == 'ESTANDAR') {

        precio(Suscripcion2.precio, PrecioDolar, ImpuestosDolar)
        alert('Precio total con impuesto incluidos: ' + preciototal + ' ARS')

        let confirmar = prompt('Desea confirmar la suscripcion? \n - SI\n - NO')

        if(confirmar.toUpperCase() == 'SI') {
            alert('Compra realizada')
        }

        Respuesta = prompt('Seleccion que subscripcion desea acceder o presione ESC: \n - Basica - 9.99\n - Estandar - 15.99\n - Premium - 19.99\n - ESC').toUpperCase()

        // break

    }

    else if(Respuesta == 'PREMIUM') {
        
        precio(Suscripcion3.precio, PrecioDolar, ImpuestosDolar)
        alert('Precio total con impuestos inlcuidos ' + preciototal)

        let confirmar = prompt('Desea confirmar la suscripcion? \n - SI\n - NO')
        
        if(confirmar.toUpperCase() == 'SI') {

            alert('Compra realizada')
            
        }
        
        Respuesta = prompt('Seleccion que subscripcion desea acceder o presione ESC: \n - Basica - 9.99\n - Estandar - 15.99\n - Premium - 19.99\n - ESC').toUpperCase()

        // break

        
    }

    
    


}
