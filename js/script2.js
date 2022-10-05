// JAVASCRIPT DE PRUEBA

function Series(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;

}

let serie1 = new Series('Demon Slayer', 'Accion')
let serie2 = new Series('Jujutsu Kaisen', 'Aventura')
let serie3 = new Series('Spy x Family, Aventura')
let serie4 = new Series('One Piece, Accion')
let serie5 = new Series('Classroom Of The Elite', 'Drama')
let serie6 = new Series('Dragon Ball Super', 'Accion')


let listaGenero = [serie1, serie2, serie3, serie4, serie5, serie6]




let Respuesta = prompt('Que genero de series desea acceder o ESC \n - Accion\n - Aventura\n - Drama').toUpperCase()

while(Respuesta != 'ESC') {
    
    if(Respuesta == 'ACCION') {
        // listaGeneroAccion = respuestaGenero.map((serie == 'ACCION'))
    let listaActual = listaGenero.filter((gen)=>gen.genero == ('Accion'))

    alert(listaActual)
    }
}