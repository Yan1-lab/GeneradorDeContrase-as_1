let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let botton = document.getElementById("limpiar");
let contrasena = document.getElementById("contrasena");
const divMostrar = document.getElementById("mostrarSeguridad");

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"

function generar(){

    let numeroDigitado = parseInt (cantidad.value);
    console.log(numeroDigitado);

    if( numeroDigitado < 8){
        alert("cantidad de caracteres tiene que ser mayor que 8");

    }

    let password ='';
    for(let i= 0 ; i< numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;

    }

    contrasena.value = password;
    
    mostraSeguridad(password)
}

function limpiar(){
    let botton = document.getElementById("contrasena").value=''
}

function mostraSeguridad(password) {
    divMostrar.innerHTML = ""; 
    let regexSegura = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{6,}$/;
    if (regexSegura.test(password)) {
        const validacionExitosa = document.createElement('h2');
        validacionExitosa.textContent = "Segura";
        validacionExitosa.style.color = "green"; 
        divMostrar.appendChild(validacionExitosa); 
        
    } else {
        const validacionFracasada = document.createElement('h2');
        validacionFracasada.textContent = "Insegura";
        validacionFracasada.style.color = "red"; 
        divMostrar.appendChild(validacionFracasada); 
    }
}