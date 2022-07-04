
/* //El usuario entra y escribe su signo , se le da la bianvenida, el objetivo es que podamos ver cuantas personas visitan al dia la pagina y de que signo son, 
asi mismo poder ver que signos son los que entran mas a la pagina y cual es el rango de edad del publico meta  */

//Ciclo de pregunta de signo y edad, para clasificar generacion de publico meta
function clasificacionUsuarios(){     
    let inicio= document.getElementById("signos").value;;
    let edadPersona= parseInt(document.getElementById("edadPersona").value);

//Clasificacion de signos para contar o saber cual signo entra mas
//let signos = ["fuego","tierra","aire","agua"];
    let signoFuego={
        nombre:['aries','leo','sagitario'],
        cantidad:0
    }
    let signoTierra={
        nombre:['tauro','virgo','capricornio'],
        cantidad:0
    }
    let signoAire={
        nombre:['geminis','libra','acuario'],
        cantidad:0
    }
    let signoAgua={
        nombre:['cancer','escorpio','piscis'],
        cantidad:0
    }
    
        if (edadPersona <= 20) {
            console.log("Tu usuario es genercion"+ " "+ "Z");
        }
        else if (edadPersona >=20 && edadPersona <=42) {
            console.log("Tu usuario es genercion"+ " "+ "Y");
        }
        else if (edadPersona >42  && edadPersona <=62) {
            console.log("Tu usuario es genercion"+ " "+ "X");
        }
        else if (edadPersona== "" && edadPersona== NaN){
            console.log('No ingresaste tu edad');
        }

switch(inicio){
    case "aries":
        document.getElementById("bienvenida").innerHTML=("Bienvenido Aries");
        signoFuego[0] = signoFuego.cantidad++
        break;

        case "tauro":
        document.getElementById("bienvenida").innerHTML=("Bienvenido Tauro");
        signoTierra[0] = signoTierra.cantidad++
        break;

        case "geminis":
        document.getElementById("bienvenida").innerHTML=("Bienvenido Géminis");
        signoAire[1] = signoAire.cantidad++
        break;

        case "cancer":
        document.getElementById("bienvenida").innerHTML=("Bienvenido Cáncer");
        signoAgua[0] = signoAgua.cantidad++
        break;

        case "leo":
        document.getElementById("bienvenida").innerHTML=("Bienvenido Leo");
        signoFuego[1] = signoFuego.cantidad++
        break;

        case "virgo":
        document.getElementById("bienvenida").innerHTML=("Bienvenido Virgo");
        signoTierra[1] = signoTierra.cantidad++
        break;

        case "libra":
        document.getElementById("bienvenida").innerHTML=("Bienvenido Libra");
        signoAire[2] = signoAire.cantidad++
        break;

        case "escorpio":
        document.getElementById("bienvenida").innerHTML=("Bienvenido Escorpio");
        signoAgua[1] = signoAgua.cantidad++
        break;

        case "sagitario":
        document.getElementById("bienvenida").innerHTML=("Bienvenido Sagitario");
        signoFuego[2] = signoFuego.cantidad++
        break;

        case "capricornio":
        document.getElementById("bienvenida").innerHTML=("Bienvenido Capricornio");
        signoTierra[2] = signoTierra.cantidad++
        break;

        case "acuario":
        document.getElementById("bienvenida").innerHTML=("Bienvenido Acuario");
        signoAire[2] = signoAire.cantidad++
        break;

        case "piscis":
        document.getElementById("bienvenida").innerHTML=("Bienvenido Piscis");
        signoAgua[2] = signoAgua.cantidad++
        break;
// No ingreso nada o no ingreso correctamente
        if (inicio== "" && edadPersona==""){
        document.getElementById("bienvenida").innerHTML=("No se han ingresados los datos correctamente");
    }
//Esto ayudra a saber cuantas personas entran?
    const inicio=[]
for (let i=0; i<inicio.length; i++){
    alert(inicio[i]);
}
console.log(signos)
}
}

checkClick=()=>{
    localStorage.setItem(clasificacionUsuarios,JSON.stringify(signoFuego,signoTierra,signoAire,signoAgua));
    }

let form = document.getElementById('contactForm')
let result =  document.getElementById('submitSuccessMessage')

form.addEventListener("submit",validarUsuario);

function validarUsuario(e){
    e.preventDefault();
    let userMail = document.getElementById("emailAddress").value;

    if(userMail.length < 3 && userMail !== ''){
        if(localStorage.getItem(form)){
            result.innerText ="Correo del usuario debe ser mayor a 3"
    }else{
        result.innerText =`El correo ${userMail} fue enviado exitosamente`
    }
}
}


