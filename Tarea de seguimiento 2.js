const especies = ['Gato', 'Caballo','Escorpion', 'Perro'];

 const PruebaCallback = () => {
    
     console.log('Callback llamado con exito.')
}

const Arreglo1 = (data,callback) =>
{
    data.pop()
    callback()
    return data
}

console.log(Arreglo1(especies,PruebaCallback))

const especies1 = ['Gato', 'Caballo','Escorpion', 'Perro'];


const Arreglo2 = (data1,dato1,dato2,callback) => 
{
        data1.push(dato1,dato2)
        callback()
        console.log(data1)

    }
Arreglo2(especies1,'Kavat','Kubrow',PruebaCallback)