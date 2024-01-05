
import { switchs } from "./script__model.js";
import { menuHamburger } from "./script__model.js";
import { btnImagePerson } from "./script__model.js";
import { validacionFormulario } from "./script__model.js";
import { ActivityExperiencie } from "./script__model.js";

//Botón para el modo oscuro o dark
const btnSwitch              = document.getElementById('switch__button');
const body                   = document.getElementById('body');

//Botón o menu hamburger
const contentMenu            = document.getElementById('header__content--nav');
const btnHamburger           = document.getElementById('header__hamburger');

//click de la imagen persona
const btnImage               = document.getElementById('right__image--person');
const modal__person          = document.getElementById('modal__image--person');
const txtModal               = document.getElementById('txtModal--image');


//inputs del formulario contacto
const inputs                 = document.querySelectorAll('.form__input');
const txtSpan                = document.querySelector('form__message--error');

const swtichTocado           = new switchs();
const btnHamburgerClass      = new menuHamburger();
const btnImageClass          = new btnImagePerson();
const validacionFormul       = new validacionFormulario();
const informacionExperience  = new ActivityExperiencie();

const experienceActivity           = document.getElementById('main__second--experience--list');
const iconActivity     = document.getElementById('main__second--experience--title');

btnSwitch.addEventListener('click', ()=>{

    swtichTocado.colocarClass(btnSwitch, body, modal__person,txtModal)

});

btnHamburger.addEventListener('click',()=>{

    btnHamburgerClass.menuHamburger(contentMenu);
})

btnImage.addEventListener('click', ()=>{

    btnImageClass.btnImageinformacion(modal__person,txtModal);

})

inputs.forEach((input)=>{
    input.addEventListener('blur', (event)=>{
        validacionFormul.validarForm(event.target);
        console.log(input)
    })
})

iconActivity.addEventListener('click', ()=>{
    informacionExperience.informacion(experienceActivity);
})