//-------------------Segmento de variables----------------
let Person1="Dana"

const Superior = "Gerente"

function Saludar_Personal()
{
    let Person ="Peter"
    const Cordial = "Buenos dias";

    console.log(Cordial, Person)

    console.log(Cordial, Superior)

    console.log(Cordial, Person1)
}

Saludar_Personal();

console.log(Superior)
console.log(Cordial)
console.log(Person)


//-----------------Segmento de condicionales---------------------

//Logical Operator ||

result = 100<200 || 5>20 || 10<20        //true
result1 = true || false                 //true
result2 = 200>1000 || 10/2*3==20       //false
result3 = 100/100 === 2.33|| 2+2===6  //false

console.log(result)
console.log(result1)
console.log(result2)
console.log(result3)

//Ternary Operator

function Membrecia()
{
    let Cliente = true;
    let Cliente1 = false; 
    
    Cliente == true ? console.log("Permitir entrada") : console.log("NO puede ingresar");
    Cliente1 == true ? console.log("Permitir entrada") : console.log("NO puede ingresar");
}

Membrecia();

//Else Statement

if (2+2===5)
{
    console.log("!Demonios Gump, eres un genio!")
} 
else
{
    console.log("Ya lo creo que sí.")
}

//Logical Operator &&

result = 100<200 && 5>20 && 10<20      //false
result1 = true && false               //false
result2 = 200>100 && 10/2*3==15      //true
result3 = 100/100 === 1 && 2+2===4  //true

console.log(result)
console.log(result1)
console.log(result2)
console.log(result3)

//Switch Statement

const Motocicleta = 'pancakes';

switch (Motocicleta){

    case 'Ninja 400':
        console.log("La opcion mas balanceada por su estilo y poder.")
        break

    case 'Versys 650':
        console.log("Definitivamente una gran eleccion para viajes.")
        break

    case 'Z1000 R':
        console.log("Una deportiva de alto calibre.")
        break
    
    default:
        console.log("Señor no mame, esto es un concesionario BMW.")
}

//If Statement

//Logical Operator !

//Comparison Operators

//Else if Clause

//Truthy and Falsy