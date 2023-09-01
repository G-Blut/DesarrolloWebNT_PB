//1--------------------------------------------------------------------
const suma = (a,b) =>{
  /*
   * a y b son los parámetros de entrada.
   * La función debe devolver la suma de los parámetros de entrada
   * Debes generar el código para que la función haga lo solicitado.
   */
  resultado = a + b
  return resultado
}

//2--------------------------------------------------------------------
const sonIguales = (x, y)=>{
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Debes generar el código para que la función haga lo solicitado.
  if  (x===y)
  {
    resultado = true
    return resultado
  }
  else
  {
  resultado = false
  return resultado
  }
}

//3-------------------------------------------------------------------
  function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    if(str1.length === str2.length)
    {
        return  true
    }
    else
    {
        return false
    }
}

//4-------------------------------------------------------------------
  function esPositivo(numero) {
    /**
     * la función recibe como parámetro de entrada un número entero.
     * Devuelve como resultado una cadena de texto que indica si el 
     * número es positivo o negativo. 
     * Si el número es positivo, devolver ---> "Es positivo"
     * Si el número es negativo, devolver ---> "Es negativo"
     * Si el número es 0, devuelve false
     * Tu código:
     */
    if (numero >0)
    {
      id='Positivo'
    }
    else if (numero===0){
      id='Neutro'
    }
    else if(numero<0){
      id='Negativo'
    }

    switch (id){

      case 'Positivo': 
        return 'Es positivo'
      break

      case 'Neutro':
        return false
      break

      case 'Negativo':
        return 'Es negativo'
      break
    }
}

//5-------------------------------------------------------------------
  const colors = (color)=>{
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuelve --> "This is blue"
    //En caso que el color recibido sea "red", devuelve --> "This is red"
    //En caso que el color recibido sea "green", devuelve --> "This is green"
    //En caso que el color recibido sea "orange", devuelve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.

    switch (color){

      case 'blue':
        return 'This is blue'
      break
      case 'red':
        return 'This is red'
      break
      case 'green':
        return 'This is green'
      break
      case 'orange':
        return 'This is orange'
      break
      default:
        return 'Color not found'
    }
}

//6------------------------------------------------------------------
  const fizzBuzz = (numero)  => {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero
    
    if(numero % 3===0 && numero % 5 === 0)
    {
      return 'fizzbuzz'
    }
    else if(numero % 3 === 0)
    {
      return 'fizz'
    }
    else if(numero % 5 === 0)
    {
      return 'buzz'
    }
    else
     return numero
}

//7------------------------------------------------------------------
  const devolverPrimerElemento = (array) => {
    /*
     * La función recibe como parámetro de entrada un arreglo.
     * La función debe regresar el primer elemento del arreglo
     */
    // Tu código:

    primero = array[0]

    return primero
}

//8------------------------------------------------------------------
  const agregarItemAlFinalDelArray = (array, elemento) =>{
    /**
     * La función recibe dos parámetros de entrada, un arreglo y un elemento
     * Se debe añadir el elemento al final del arreglo y luego regresar el arreglo
     */
    // Tu código:
    trabajo = array.push(elemento)
    return  array
}

//9------------------------------------------------------------------
  const nuevoUsuario = (nombre, email, password) => {
    /*
     * Crea un nuevo objeto con las propiedades coincidiendo con los argumentos
     * que se pasan a la función.  Devuelve el objeto
     */
    // Tu código:
    let user =
      {
        nombre,
        email,
        password
      }

    return user
}

//10------------------------------------------------------------------
  const verificarPassword = (usuario,password) => {
    // Comprueba si el "password" enviado coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // // Tu código:
    
    if (password===usuario.password)
    {
      return true
    }
    else
    {
      return false
    }
}

//11------------------------------------------------------------------
  const actualizarPassword =(usuario, nuevaPassword) => {
    // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
    // Devuelve el objeto
    // Tu código:
      usuario = {
        password: ''
      }

      usuario.password = nuevaPassword

     return usuario
}

//12------------------------------------------------------------------
  const agregarAmigo = (usuario, nuevoAmigo) => {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"
    // // Tu código:

    usuario={amigos:[]}
    trabajo = usuario.amigos.push(nuevoAmigo)

    return usuario
}

//13------------------------------------------------------------------ 
  const pasarUsuarioAPremium = usuarios => {
    // "usuarios" es un array de objetos "usuario"
    // Cada objeto "usuario" tiene la propiedad "esPremium"
    // Define cada propiedad "esPremium" de cada objeto como "true"
    // Devuelve el array de usuarios
    // Tu código:
  usuarios.forEach(exibicion => {exibicion.esPremium = true})
  return usuarios
}

//14------------------------------------------------------------------   
  const sumarLikesDeUsuario = usuario => {
    // "usuario" tiene una propiedad llamada "posts" que es un array
    // "posts" es un array de objetos "post"
    // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
    // Suma todos los likes de todos los objetos "post"
    // Devuelve la suma
    // Tu código:

    const sum = usuario.posts.reduce((previous, current)=>{
      return previous + current.likes},0)
    
    return sum
}

//15------------------------------------------------------------------ 
class Persona {
  // ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con 
  //las propiedades de la persona y sus valores.
  //un ejemplo del objeto es el siguiente
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }
    constructor(nombre, apellido, edad, domicilio)
    {
      this.nombre = nombre
      this.apellido = apellido
      this.edad = edad
      this.domicilio = domicilio
    }

    detalle()
    {
      this.nombre
      this.apellido
      this.edad
      this.domicilio
    }
}

//16------------------------------------------------------------------ 
const crearInstanciaPersona = (nombre, apellido, edad, dir)=>{
    //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
    //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
    //Devolver la nueva persona creada
    
  const nuevaPersona = new Persona(nombre, apellido, edad, dir)
  return nuevaPersona
}

//17------------------------------------------------------------------ 
const sumarArray = (numeros, cb) =>{
    // Suma todos los números enteros (int/integers) de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada

  //const sum = numeros.reduce((a,b)=>a+b,0)
    
  //return cb=sum

  const suma = numeros.reduce((valorAnterior, valorActual) => {
    return valorAnterior + valorActual;}, 0);
    cb(suma)
}

//18------------------------------------------------------------------ 
const copiarEach = (array, cb) =>{
    // Itera sobre la matriz "array" y pasa los valores a cb uno por uno
    // Pista: Estarás invocando a `cb` varias veces (una por cada valor en el array)
    // no tienes que devolver nada
    //array [1, 2, 3, 4, 5]

    const mapeo = array.map(item => cb(item))
    return mapeo
}

//19------------------------------------------------------------------   
const operacionMatematica =(n1, n2, cb) =>{
  //Vamos a recibir una función (cb) que realiza una operación matemática junto con dos números.
  //Devolver la función pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2)
  
}

//20------------------------------------------------------------------   
function filter(array) {
    //Filtrar todos los elementos del array que comiencen con la letra "a".
    //Devolver un nuevo array con los elementos que cumplen la condición
    //Tu código:    
    let busqueda = 'a'
    let filtro = array.filter(palabra => palabra.startsWith(busqueda))
    return filtro
} 

  /**
 * Por favor no borrar el código que hay de aquí en adelante.
 * Este código sirve para ejecutar las pruebas de la solución hallada para cada
 * una de las funciones creadas.
 */

module.exports = {
    suma,
    sonIguales,
    tienenMismaLongitud,
    esPositivo,
    colors,
    fizzBuzz,
    devolverPrimerElemento,
    agregarItemAlFinalDelArray,
    nuevoUsuario,
    verificarPassword,
    actualizarPassword,
    agregarAmigo,
    pasarUsuarioAPremium,
    sumarLikesDeUsuario,
    Persona,
    crearInstanciaPersona,
    sumarArray,
    copiarEach,
    operacionMatematica,
    filter
}

