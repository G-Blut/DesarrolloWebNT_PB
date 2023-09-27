// Variables globales
let CorreoElec;
let SalidaCor;

document.addEventListener('DOMContentLoaded', function () {
    // Aquí estamos seguros de que el DOM se ha cargado
    
    const IdRoot = document.getElementById('Root');
    
    const IdShape = document.getElementById('Shape');

    const Titulo = document.createElement('h1');
    Titulo.appendChild(T_Titulo);
    IdRoot.appendChild(Titulo);

    const Descripcion = document.createElement('h2');
    Descripcion.appendChild(T_Descripcion);
    IdRoot.appendChild(Descripcion);

    const Salto = document.createElement('br');
    IdShape.appendChild(Salto);

    const Indicaciones = document.createElement('h3');
    Indicaciones.appendChild(T_Indicaciones);
    IdShape.appendChild(Indicaciones);

    const prelude = `
    <section>
    <ul class="container">
    <img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" alt="Error al cargar imagen.jpg xd">
    </ul>
    </section>
    `
    const imagen = document.createElement('section')
    imagen.innerHTML = prelude
    IdShape.appendChild(imagen)

    const opcion=`
    <p>Motivos por los cuales nos debes de elegir</p>
    <ul>
        <li>Este programa es superio a la competencia</li>
        <li>El mejor resultado gratis</li>
    </ul>
    `
    const intro = document.createElement('section')
    intro.innerHTML = opcion
    IdShape.appendChild(intro)


    const IngresoNom = document.createElement('input');
    IngresoNom.id = 'IngresoNom';
    IdShape.appendChild(IngresoNom);

    const parrafo = document.querySelector('#Shape p');

    // Agrega texto al elemento <p>
    parrafo.textContent = 'Estas son las distintas opciones que tienes para elegir';
    IdShape.appendChild(parrafo)

    const TipoCorreo = ['@gmail.com', '@hotmail.com', '@outlook.com'];

    for (let index = 0; index < TipoCorreo.length; index++) {
        const btnSelect = document.createElement('button');
        btnSelect.id = TipoCorreo[index];
        btnSelect.innerHTML = TipoCorreo[index];
        btnSelect.addEventListener('click', EventoClick);
        IdShape.appendChild(btnSelect);
    }

    
    //const relleno = document.createElement('section')
    //relleno.classList.add('infoAdicional')
    //relleno.innerHTML= pruebainsercion

    const pruebainsercion = `
    <small>Aqui esta tu resultado</small>
    <br>
    <strong>Espero que este programa haya sido de tu agrado.</strong>
    `
    const relleno = document.createElement('section')
    relleno.classList.add('infoAdicional')
    relleno.innerHTML= pruebainsercion
    IdShape.appendChild(relleno)

    SalidaCor = document.createElement('h3');
    IdShape.appendChild(SalidaCor);

});

// Elementos de texto
const T_Titulo = document.createTextNode('Bienvenido al generador de correos electrónicos');
const T_Descripcion = document.createTextNode('Por favor siga las siguientes indicaciones: ');
const T_Indicaciones = document.createTextNode('Favor de ingresar su nombre completo');


const GeneResult = () => {
    const valorIngresado = document.getElementById('IngresoNom').value;
    const valorGenerado = valorIngresado + CorreoElec;
    SalidaCor.textContent = 'Correo electrónico generado: ' + valorGenerado;
};

const EventoClick = (e) => {
    CorreoElec = e.target.id;
    GeneResult();
};