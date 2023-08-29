/*Crear una clase padre
Crear una clase que herede de la clase padre
Ambas clases deben tener minimo 2 metodos
Deben recibir objetos(clases)
Los objetos recibidos deben tener otro objeto como propiedad
Mostrar resultados*/


class Raza{
    constructor (especie, nombre, alianza, planeta)
    {
     this.especie= especie
     this.nombre=nombre
     this.alianza=alianza
     this.planeta=planeta
    }

    PlanetaOrigen()
    {
        return this.planeta
    }

    Declaracion()
    {
        return this.alianza
    }
}	

class Individuo extends Raza{
    constructor(especie,nombre,alianza,planeta)
    {
        super(nombre,especie,alianza,planeta)
    }

    DeclaracionDeEspecie()
    {
        console.log(`Mi especie es: ${this.especie}`)
    }

    Presentacion()
    {
        console.log(`Mi nombre es ${this.nombre}, perteneciente a la especie ${this.especie} del planeta ${this.planeta}`)
    }
}

const UrDail = new Individuo('Analik','UrDail','Supremacia','ReAlba')
const Humano = new Individuo('Spensa','Humana','FDD','Detritus')

//UrDail.Presentacion()
//UrDail.DeclaracionDeEspecie()

Humano.Presentacion()
console.log(Humano.Declaracion())


class Discografia{
    constructor (dato)
    {
     this.Titulo = dato.Titulo
     this.Artista = dato.Artista
     this.Genero = dato.Genero
     this.Album = dato.Album
    }
    Presentar()
    {
        console.log(`Se esta reproduciendo del album ${this.Titulo} del artista ${this.Artista} las siguientes pistas: \n ${this.Album.Pista1}, ${this.Album.Pista2}, ${this.Album.Pista3}`)
    }

    Musico()
    {
        console.log(`El artista en reproduccion es ${this.Artista}`)
    }
}
const album = new Discografia(
    {
        Titulo:'The Golden Age of Grotesque',
        Artista:'Marilyn Manson',
        Genero:'Rock Gotico',
        Album:{
            Pista1:'Tainted Love',
            Pista2:'(s)AINT',
            Pista3:'Slutgarden'
        }
    }
)
//album.Presentar()
album.Musico()

const album1 = new Discografia(
    {
        Titulo:'One X',
        Artista:'Three Days Grace',
        Genero:'Rock',
        Album:{
            Pista1:'Riot',
            Pista2:'Time of Dying',
            Pista3:'Gone Forever'
        }
    }
)
album1.Presentar()
album1.Musico()

