class Animal{
    constructor(especie,color,sonido,habitat)
    {
        this.especie=especie
        this.color=color
        this.sonido=sonido
        this.habitat=habitat
    }

    moverse(tipoMovimiento)
    {
        console.log(`Mi movimiento es: ${tipoMovimiento}`)
    }

    determinarEspecie()
    {
        return this.especie
    }

    sonidoCaracteristico()
    {
        return this.sonido
    }

    dondeSeEncuentra()
    {
        return this.habitat
    }
}



class Perro extends Animal{
    constructor(raza, color, sonido)
    {
        //this.raza = raza
        //this.color = color
        //this.sonido = sonido
        super(raza,color,sonido,'Casa') //inicializa el constructor del padre
    }
    
    ladrar()
    {
        return this.sonido
    }

    sentarse()
    {
        console.log('Me he sentado')
    }
}

const Labrador = new Perro('Labrador','Blanco','Woof')

Labrador.sentarse()
console.log(Labrador.sonidoCaracteristico()) //regresa en console 'Woof'

//Clases que reciben objetos
class Musica{
    constructor (info)
    {
        this.fechaLanzamiento = info.fechaLanzamientoj
        this.artista = info.artista
        this.genero = info.genero
        this.titulo = info.titulo
    }

    Reproducir()
    {
        console.log(`Se esta reproduciendo ${this.titulo} del artista ${this.artista}`)
    }
    Pausar()
    {
        return `Se ha pausado ${this.titulo} del artista ${this.artista}`
    }
}

//creacion del objeto
const informacion = {
    fechaLanzamiento:1989,
    artista:'Madona',
    genero: 'pop',
    titulo:'Like a virgin'
}
const Pop = new Musica(informacion)
Pop.Reproducir()

const PopUno= new Musica(
    {
        fechaLanzamiento:1989,
        artista:'Queen',
        genero: 'pop',
        titulo:'Bohemean Rapsody'
    }

)

PopUno.Reproducir()

/*Crear una clase padre
Crear una clase que herede de la clase padre
Ambas clases deben tener minimo 2 metodos
Deben recibir objetos(clases)
Los objetos que recibidos deben tener otro objeto como propiedad
Mostrar resultados*/