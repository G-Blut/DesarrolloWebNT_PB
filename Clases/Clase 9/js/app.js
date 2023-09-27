import { personas } from "./persona.js";
import { computersChoiceDisplay } from "./dom.js";

const sectionMain = document.createElement('section');
const parrafoPrincipal = document.createElement('p');
parrafoPrincipal.innerHTML= personas[0].primerNombre+' '+personas[0].apellido
sectionMain.classList.add('main');
//document.body.appendChild(sectionMain)
document.body.appendChild(parrafoPrincipal) 

//const divisionPagina = ()=>{
    const seccion = `
    <section>
        <p>Dentro de otro section</p>
    </section>
    `;
//}
sectionMain.innerHTML= seccion
document.body.appendChild(sectionMain)