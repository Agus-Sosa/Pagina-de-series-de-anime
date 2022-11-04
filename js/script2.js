// Lista De Series
const listaseries = [
    {
        id: 1,
        nombre: 'Jujutsu Kaisen',
        imagen: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpeg',
        genero: 'Accion'
    },
    {
        id: 2,
        nombre: 'One Piece', 
        imagen: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpeg',
        genero: 'Aventura'
    },
    {
        id: 3,
        nombre: 'Shield Hero',
        imagen: 'https://img1.ak.crunchyroll.com/i/spire4/25627becf63b169d19af7efee6122e791555537428_full.jpg',
        genero: 'Aventura',
    },
    {
        id: 4,
        nombre: 'Re:Zero',
        imagen: 'https://img1.ak.crunchyroll.com/i/spire3/291c6c3b60857afabe46899f848079a41610403802_main.jpg',
        genero: 'Drama'
    },
    {
        id: 5,
        nombre: 'Chainsaw Man',
        imagen: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/922742d9acaeba7d887ed11b6caab0e4.jpeg',
        genero: 'Accion',
    },
    {
        id: 6,
        nombre: 'Spy x Family',
        imagen: 'https://img1.ak.crunchyroll.com/i/spire4/aca67c20cfebb66369acb168168d0bdc1637343068_main.png',
        genero: 'Drama'
    },
    {
        id: 7,
        nombre: 'My Hero Academia',
        imagen: 'http://img1.ak.crunchyroll.com/i/spire1/281089c6a9e64236a10e3b4232474e411523054320_full.png',
        genero: 'Accion'
    },
    {
        id: 8,
        nombre: 'Attack on Titan',
        imagen: 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/a9d4c1493f80703fe86dd83fb3b37623.jpeg',
        genero: 'Accion'
    }
]

// Contenedor
let catalogo = document.getElementById('container-series')

let listaFav = []

let errorDeBusqueda = document.getElementById('error-busqueda')
listaDeNombres = listaseries.filter((prod) =>prod.nombre)

let contadoDeFavoritos = document.getElementById('contador-favoritos')

function renderSeries(lista) {
    catalogo.innerHTML = ''
    for(const prod of lista ){
        let cardContenedor = document.createElement('a')
    cardContenedor.className = 'card'

    let contenedorImagen = document.createElement('div')
    contenedorImagen.innerHTML = `<img src='${prod.imagen}'>`
    contenedorImagen.className = 'imagen-card'

    let NombreSerie = document.createElement('h3')
    NombreSerie.innerText = prod.nombre

    let GeneroSerie = document.createElement('p')
    GeneroSerie.innerText = prod.genero

    
    let BotonAñadirFav = document.createElement('button')
    BotonAñadirFav.className = 'añadir-favorito'
    BotonAñadirFav.innerText = 'Añadir'
    BotonAñadirFav.setAttribute('agregar', prod.id)
    BotonAñadirFav.addEventListener('click', () => {
        
            mostrarListaFavoritos

            AgregarAFavoritos(prod.id)

            
    })



    cardContenedor.append(contenedorImagen)
    cardContenedor.append(NombreSerie)
    cardContenedor.append(GeneroSerie)
    cardContenedor.append(BotonAñadirFav)
    catalogo.append(cardContenedor)
    }
}




renderSeries(listaseries)


let filtrarCategoria = ''

let filtroDeBusqueda = document.getElementById('catalogo')
filtroDeBusqueda.addEventListener('change', ()=> {filtrarCategoria = filtroDeBusqueda.value})

let botonDeFiltrar = document.getElementById('filtrar')
botonDeFiltrar.addEventListener('click', filtrar)

let tituloCatalogo = document.getElementById('titulo-catalogo')

function filtrar () {
    let filtroActual = listaseries.filter((prod) =>prod.genero == filtrarCategoria)
    tituloCatalogo.innerHTML = filtrarCategoria
    if(filtroActual == 0){
        errorDeBusqueda.innerHTML = ''
        tituloCatalogo.innerText = 'Sin Resultados'

        
        
    }
    
    renderSeries(filtroActual)
}

let botonMostrarTodo = document.getElementById('mostrar-todo')
botonMostrarTodo.addEventListener('click', mostrarTodo)

function mostrarTodo () {
    tituloCatalogo.innerHTML = 'Todos'
    
    renderSeries(listaseries)
}


let AgregarAFavoritos = (prodId) =>{
    const fijarseSiExiste = listaFav.some(serie => serie.id === prodId)

    if(fijarseSiExiste){
        Toastify({
            text: 'Este contenido ya se encuentra en la lista',
            
            style:{
                background: '#262949',
            },
            
        }).showToast()
    }else{

        
        let item = listaseries.find((prod)  => prod.id === prodId)
        listaFav.push(item)
        Toastify({
                
            text: "Se agrego a favoritos",
            
            duration: 3000,
            style:{
                background:'#262949'
            }
        }).showToast();
    }
    
    mostrarListaFavoritos()
    
}


let botonFavoritos = document.getElementById('boton-favoritos')
botonFavoritos.addEventListener('click', () => {
    mostrarListaFavoritos()
})


let ContenedorListaFavoritos = document.getElementById('contenedor-favorito')

function mostrarListaFavoritos (){
    ContenedorListaFavoritos.innerHTML = ''
    let div = document.createElement('div')
    if(listaFav.length == 0){
        div.innerHTML = '<img src="https://i.kym-cdn.com/photos/images/original/000/845/119/498.png" class="img-contenedor"><p class="p-contenedor">No hay nada aquí<p>'
    }
    listaFav.forEach((prod) => {
        let {id, nombre, imagen, genero, } = prod
        div.className = 'segundo-contenedor'
        div.innerHTML += `
        <section class='contenedor-series2'>
        
        <article class="contenedor-imagen">
        <img class="" src="${imagen}">
        </article>
        <h5>${nombre}</h5>
        <p>${genero}</p>
        
        <button onclick="eliminarSerie(${id})" class=""><i class="fa-solid fa-x"></i></button>
        
        </section>
    `
    })
    
    contadoDeFavoritos.textContent = listaFav.length

    guardarFavEnStorage()

    let contenedorDeBotones = document.createElement('div')
    contenedorDeBotones.className = 'contenedor-botones'

    let botonCerrarVentana = document.createElement('button')
    botonCerrarVentana.innerText = 'Cerrar'
    botonCerrarVentana.className = 'btn-cerrar'
    botonCerrarVentana.addEventListener('click', () => {
        ContenedorListaFavoritos.innerHTML = ''
    })

    let  botonBorrarTodo = document.createElement('button')
    botonBorrarTodo.innerText = 'Borrar todo'
    botonBorrarTodo.className = 'btn-cerrar'
    botonBorrarTodo.addEventListener('click',() =>{
        if(listaFav.length > 0){

            Swal.fire({
                title: '¿Estas Seguro?',
                text: "¡No podrás revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, Estoy Seguro'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                'Lista eliminada!',
                'El proceso fue cancelado.',
                'success'
                )
                
                listaFav = []
                mostrarListaFavoritos()
            }
        })
    }
    else if(listaFav == 0){
        Toastify({

            text: "Tu lista de favoritos esta vacia",
            duration: 3000,
            style:{
                background: '#262949',
            },
            
            }).showToast();
    }
    })

    contenedorDeBotones.append(botonBorrarTodo)
    ContenedorListaFavoritos.append(div)
    div.append(contenedorDeBotones)
    contenedorDeBotones.append(botonCerrarVentana)
}





function eliminarSerie (id) {
    let serieId = id
    listaFav = listaFav.filter((serie) => serie.id !== serieId)
    mostrarListaFavoritos()
    Toastify({

        text: "Se elimino de favoritos",
        
        duration: 3000,
        style:{
            background: '#262949'
        }
        
        }).showToast();

}

document.addEventListener('DOMContentLoaded', () =>{
    listaFav = JSON.parse(localStorage.getItem('favoritos')) || []
    mostrarListaFavoritos()

})

function guardarFavEnStorage (){
    localStorage.setItem('favoritos', JSON.stringify(listaFav))
}

