const Motos=[

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
            Segmento:'Sport',
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

/*let FiltrarMoto = Motos.filter((exibicion) =>
    {
            where===exibicion.Modelo.Cilindraje >1000
            //  console.log(`La marca del vehiculo es: ${exibicion.Marca}, Y el modelo presenta las siguientes caracteristicas:`)
            console.log(`Año: ${exibicion.Modelo.Anio}, Segmento: ${exibicion.Modelo.Segmento}, Nombre: ${exibicion.Modelo.Nombre}, Cilindraje: ${exibicion.Modelo.Cilindraje}`)
        return console.log(`La marca del vehiculo es: ${exibicion.Marca}`)
 
    }    
)*/
////---------------------------------------------------------------------
let FiltrarMoto = Motos.filter((exibicion) => exibicion.Modelo.Cilindraje>1000)
console.log(FiltrarMoto, `La marca del vehiculo es: ${FiltrarMoto}, Y el modelo presenta las siguientes caracteristicas:`)

////---------------------------------------------------------------------
let MostrarMoto = Motos.map((exibicion) => {
    `${exibicion.Marca} ${exibicion.Modelo.Cilindraje}`
    return exibicion    
})

console.log(MostrarMoto)
////----------------------------------------------------------------------

// const FiltrarMotos = Motos.filter((exibicion) =>
// {
//     //exibicion.Modelo.Cilindraje >1000
//     return exibicion
// })

//console.log(FiltrarMoto,(`La marca del vehiculo es: ${Marca}`))

