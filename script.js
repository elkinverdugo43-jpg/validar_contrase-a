function validacionContraseña(contraseña){
    const logitudMinima = /^.{8,}$/;
    const tieneMayuscula = /[A-Z]/;
    const tieneMinuscula = /[a-z]/;
    const tieneNumero = /\d/;
    const tieneEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (! logitudMinima.test(contraseña)){
        return 'la contraseña debe tener almenos 8 caracteres';
    }
    if (! tieneMayuscula.test(contraseña)){
        return 'la contraseña debete tener almenos una mayuscula';
    }
    if (! tieneMinuscula.test(contraseña)){
        return 'la contraseña debe tener almenos una minuscula';
    }
    if (! tieneNumero.test(contraseña)){
        return 'la contraseña debete tener almenos un numero';
    }
    if (! tieneEspecial.test(contraseña)){
        return 'la contraseña debete tener almenos un caracter especial';
    }

    return 'la contraseña es valida';
}
const formulario = document.querySelector('#formularioContraseña');
const mensaje = document.querySelector('#mensaje');

formulario.addEventListener('submit',function(i) {
    i.preventDefault()

    const contraseña = document.querySelector('#password').value;
    const resultado = validacionContraseña(contraseña);

    if (resultado === 'la contraseña es valida') {
        mensaje.textContent = resultado;
        mensaje.className = 'mensaje-valido';
    } else {
        mensaje.textContent = resultado;
        
        mensaje.className = 'mensaje-error';
    }
})
