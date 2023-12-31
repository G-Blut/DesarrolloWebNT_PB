let Motos=[

    {
        Marca:'Kawasaki',
        Modelo:{
            Anio:'2022',
            Segmento:'Tourig',
            Nombre:'Versys 650',
            Cilindraje:649
        }
    },

    {
        Marca:'BMW',
        Modelo:{
            Anio:'2023',
            Segmento:'Super Sport',
            Nombre:'S1000 RR',
            Cilindraje:999
        }
    },

    {
        Marca:'Ducati',
        Modelo:{
            Anio:'2020',
            Segmento:'Sport Touring',
            Nombre:'Multistrada',
            Cilindraje:1262
        }
    }
]

let MotoNueva=
{
    Marca:'Yamaha',
    Modelo:{
        Anio:'2024',
        Segmento:'Super Bike',
        Nombre:'R1',
        Cilindraje:998
    }
}

////---------------------------------------------------------------------
let FiltrarMoto = Motos.filter((exibicion) => exibicion.Modelo.Cilindraje<1000)

FiltrarMoto.forEach(exibicion => {
    
console.log(`La marca del vehiculo es: ${exibicion.Marca}, Y el modelo presenta las siguientes caracteristicas: `)

console.log(` Año:${exibicion.Modelo.Anio}\n Segmento: ${exibicion.Modelo.Segmento}\n Nombre: ${exibicion.Modelo.Nombre}\n Cilindraje: ${exibicion.Modelo.Cilindraje}\n`)

});
////---------------------------------------------------------------------
let MostrarMoto = Motos.map((exibicion) => {
    `${exibicion.Marca} ${exibicion.Modelo.Cilindraje}`
    return exibicion    
})

console.log(MostrarMoto)
////----------------------------------------------------------------------
Motos.push(MotoNueva)
console.log(Motos)




