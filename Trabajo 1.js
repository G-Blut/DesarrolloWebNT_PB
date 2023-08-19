//-------------------Segmento de variables----------------
let Person1="Dana"

const Superior = "Gerente"

//console.log(Person,Person1)

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

true || false;        // true
10 > 5 || 10 > 20;    // true
false || false;       // false
10 > 100 || 10 > 20;  // false

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

//Logical Operator &&

//Switch Statement

//If Statement

//Logical Operator !

//Comparison Operators

//Else if Clause

//Truthy and Falsy