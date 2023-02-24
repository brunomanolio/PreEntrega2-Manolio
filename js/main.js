alert("Bienvenido!")


const reproductorMusica = {
    reproducir: (cancion) => document.write ("Reproduciendo la cancion " + cancion ),
    pausa: () => document.write ("Pausando"),
    borrar: (cancion) => document.write ("Borrando la cancion " + cancion),
    siguente: () => document.write ("Siguente cancion..."),
    anterior: () => document.weite ("Anterior cancion..."),
    crearPlaylist: (nombre) => console.log ("Se creo la playlist " + nombre),
    reproducirPlaylist: (nombre) => document.write ("Se esta reproduciendo la Playlist " + nombre),
}


reproductorMusica.reproducir (prompt("Elige la cancion para escuchar "))
reproductorMusica.crearPlaylist (prompt("Crear nombre de Playlist"))

const bandasInternacionales = ["The Rolling Stones", "The Beatles", "Arctic Monkeys", "The Strokes", "Audioslave", "Depeche Mode", "the Killers"]
const bandasNacionales = ["Divididos", "Los Piojos", "La Vela Puerca", "Soda Stereo", "Cruzando el Charco", "Viejas Locas"]

//Agregar bandas en bandasInternacionales
bandasInternacionales.push = prompt(("Agrega una Banda"))
console.log(bandasInternacionales)

// Eliminar una banda en bandasNacinales
bandasNacionales.shift = prompt(("Elimine una Banda Nacional"))
console.log(bandasNacionales)


//buscar artistas del año 1962 (no me salio, quise hacer un filtro que me traiga los artistas del año 1962 y no me lo filtro)
let año = 1962

function mostrarArtistas(artistas){
    artistas.forEach(artistas => {
        console.log(artistas.nombreArtista + " " + artistas.añoCreacion + " " + artistas.origen + " " + artistas.genero + " " + artistas.mejorCancion)
    })
}


function sinArtistas (){
    console.log ("Sin Artista")
}

function filtarAño(artista){
    if(año){
        return artista.año === año
    }
    return artista;
}

function filtrarArtista(){
    let resultado = artistas.filter(filtarAño);
    if (resultado.lenght){
        mostrarArtistas(resultado)
    }else {
        sinArtistas()
    }
}

filtrarArtista();


//for...of

console.log("---------for...of------")
for (let nombreArtista of artistas){
    console.log (nombreArtista)
}

//Compra de un almbum

let precioAlbum = 150
console.log("---------Compra de Album------")

let compra = function(){
    console.log("El monto del almbum es " + precioAlbum * 1.21);
}

compra()


//Diferentes tipos de parlantes
console.log("---------Compra de Parlantes------")
console.log ("Parlante marca  " + parlante.marca + ", el precio es de " + parlante.precio + " pesos")
console.log("Parlante marca  " + parlante.marca + ", bluetooth: " + parlante.bluetooth)
console.log("--------")
parlante.marca = "Samsung"
parlante.precio = 40000
parlante.bluetooth = "No"
console.log ("Parlante marca  " + parlante.marca + ", el precio es de " + parlante.precio + " pesos")
console.log("Parlante marca  " + parlante.marca + ", bluetooth: " + parlante.bluetooth)
console.log("--------")
parlante.marca = "LG"
parlante.precio = 10000
parlante.bluetooth = "SI"
console.log ("Parlante marca  " + parlante.marca + ", el precio es de " + parlante.precio + " pesos")
console.log("Parlante marca  " + parlante.marca + ", bluetooth: " + parlante.bluetooth)



//El genero que mas me gusta
console.log("---------El genero que mas me gusta-----")
console.log("El genero que mas me gusa es " + generos[3])

// hof -> sinceramente no las entiendo del todo
console.log("----HOF calculando el iva de los parlantes-----")
let compraParlantesIva = [50000,40000,10000,]

let duplicar = compraParlantesIva.map((x)=> x*1.21)
console.log(duplicar)


