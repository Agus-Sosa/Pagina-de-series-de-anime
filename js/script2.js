function Catalogo(nombre, imagen, genero) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.genero = genero
}


let serieA = new Catalogo('Jujutsu Kaisen', 'https://img1.ak.crunchyroll.com/i/spire3/99ef837028463d4f940b63c2b288222b1600049466_main.png', 'Accion')
let serieB = new Catalogo('One Piece', 'https://img1.ak.crunchyroll.com/i/spire4/8056a82e973dde98ebb82abd39dc69731564519729_full.jpg', 'Aventura')
let serieC = new Catalogo('The Rising of the Shield Hero', 'https://img1.ak.crunchyroll.com/i/spire4/74dc98daf4362012ff758c7f4a13b2381649904825_main.jpg', 'Aventura')
let seireD = new Catalogo('Re:Zero kara Hajimeru Isekai Seikatsu', 'https://img1.ak.crunchyroll.com/i/spire3/291c6c3b60857afabe46899f848079a41610403802_main.jpg', 'Drama')

let listaCatalogo = [serieA, serieB, serieC, seireD]

let catalogo = document.getElementById('container-series')

let errorDeBusqueda = document.getElementById('error-busqueda')
listaDeNombres = listaCatalogo.filter((prod) =>prod.nombre)


function render(lista) {
    catalogo.innerHTML = ''
    for(const prod of lista) {
        let card = document.createElement('a')

        card.className = 'card'
        card.innerHTML = `<img src='${prod.imagen}'><h3>${prod.nombre}</h3><p>${prod.genero}</p> `

        catalogo.append(card)
    }

}
render(listaCatalogo)

let filtrarCategoria = ''

let filtroDeBusqueda = document.getElementById('catalogo')
filtroDeBusqueda.addEventListener('change', ()=> {filtrarCategoria = filtroDeBusqueda.value})

let botonDeFiltrar = document.getElementById('filtrar')
botonDeFiltrar.addEventListener('click', filtrar)

let tituloCatalogo = document.getElementById('titulo-catalogo')

function filtrar () {
    let filtroActual = listaCatalogo.filter((prod) =>prod.genero == filtrarCategoria)
    tituloCatalogo.innerHTML = filtrarCategoria
    if(filtroActual == 0){
        errorDeBusqueda.innerHTML = ''
        tituloCatalogo.innerText = 'Sin Resultados'
        
        // let sinResultados = document.createElement('div')
        // sinResultados.className = 'sin-resultados'
        // sinResultados.innerHTML = '<p>No se encontraron resultados</p>'

        // errorDeBusqueda.append(sinResultados)
        
        
    }

    
    render(filtroActual)

}

let botonMostrarTodo = document.getElementById('mostrar-todo')
botonMostrarTodo.addEventListener('click', mostrarTodo)

function mostrarTodo () {
    tituloCatalogo.innerHTML = 'Todos'
    
    render(listaCatalogo)
    
}

let botonDeSuscribirse = document.getElementById('boton-suscribirse')
botonDeSuscribirse.addEventListener('mouseover', eventoDeSuscribirse)

function eventoDeSuscribirse () {
    setTimeout(() => {botonDeSuscribirse.innerHTML = 'Suscribirse'},1000)
}

botonDeSuscribirse.addEventListener('mouseout', eventoDeSuscribirse2)

function eventoDeSuscribirse2 () {
    setTimeout(() => {botonDeSuscribirse.innerHTML = '<i class="fa-regular fa-address-card"></i>'}, 1000)
}


// function errorbusqueda () {
//     if(filtroActual == 0){
//         errorDeBusqueda.innerHTML = ''
//         let sinResultados = document.createElement('div')
//         sinResultados.className = 'sin-resultados'
//         sinResultados.innerHTML = '<p>No se encontraron resultados</p>'

//         errorDeBusqueda.append(sinResultados)

//     }
// }

// errorDeBusqueda()