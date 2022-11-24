const form = document.querySelector('#form-container');
const inputs = document.querySelectorAll('#input-container input');

const expresiones = {
    name: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
} 

const campos = {
    name: false,
    apellido: false,
    password: false,
    email: false
}

const validarFormulario = (e) => {
    switch(e.target.name){
        case "name":
            validarCampo(expresiones.name, e.target , 'name');
        break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target , 'apellido');
        break;
        case "password":
            validarCampo(expresiones.password, e.target , 'password');
        break;
        case "email":
            validarCampo(expresiones.email, e.target , 'email');
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.querySelector(`#input-${campo} .text-error`).classList.add('inactive');
        document.querySelector(`#input-${campo} .icon-error`).classList.add('inactive');
        document.querySelector(`#input-${campo} #input`).classList.remove('active-input');
        campos[campo] = true;
    }else {
        document.querySelector(`#input-${campo} .text-error`).classList.remove('inactive');
        document.querySelector(`#input-${campo} .text-error`).classList.add('active');
        document.querySelector(`#input-${campo} .icon-error`).classList.remove('inactive');
        document.querySelector(`#input-${campo} .icon-error`).classList.add('active-two');
        document.querySelector(`#input-${campo} #input`).classList.add('active-input');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    if(campos.name && campos.apellido && campos.password && campos.email){
        form.reset();
    }    
});
