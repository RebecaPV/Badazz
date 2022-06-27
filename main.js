
/* //El usuario entra y escribe su signo , se le da la bianvenida, el objetivo es que podamos ver cuantas personas visitan al dia la pagina y de que signo son, 
asi mismo poder ver que signos son los que entran mas a la pagina y cual es el rango de edad del publico meta  */

//Ciclo de pregunta de signo y edad, para clasificar generacion de publico meta
for (let s=1; s<=4; s++){
    let inicio= (prompt('Ingesa tu signo zodiacal; en minusculas y sin acentos por favor .'));
    let edadPersona= parseInt(prompt('Ingresa tu edad por favor'));
//Clasificacion de signos para contar o saber cual signo entra mas
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
    //let signos = ["fuego","tierra","aire","agua"];
        if (edadPersona <= 20) {
            alert("Tu usuario es genercion"+ " "+ "Z");
        }
        else if (edadPersona >=20 && edadPersona <=42) {
            alert("Tu usuario es genercion"+ " "+ "Y");
        }
        else if (edadPersona >42  && edadPersona <=62) {
            alert("Tu usuario es genercion"+ " "+ "X");
        }
        else if (edadPersona== "" && edadPersona== NaN){
            alert ('No ingresaste tu edad');
            continue
        }
switch(inicio){
    case "aries":
        alert("Bienvenido Aries");
        signoFuego[0] = signoFuego.cantidad++
        break;

        case "tauro":
        alert("Bienvenido Tauro");
        signoTierra[0] = signoTierra.cantidad++
        break;

        case "geminis":
        alert("Bienvenido Géminis");
        signoAire[1] = signoAire.cantidad++
        break;

        case "cancer":
        alert("Bienvenido Cáncer");
        signoAgua[0] = signoAgua.cantidad++
        break;

        case "leo":
        alert("Bienvenido Leo");
        signoFuego[1] = signoFuego.cantidad++
        break;

        case "virgo":
        alert("Bienvenido Virgo");
        signoTierra[1] = signoTierra.cantidad++
        break;

        case "libra":
        alert("Bienvenido Libra");
        signoAire[2] = signoAire.cantidad++
        break;

        case "escorpio":
        alert("Bienvenido Escorpio");
        signoAgua[1] = signoAgua.cantidad++
        break;

        case "sagitario":
        alert("Bienvenido Sagitario");
        signoFuego[2] = signoFuego.cantidad++
        break;

        case "capricornio":
        alert("Bienvenido Capricornio");
        signoTierra[2] = signoTierra.cantidad++
        break;

        case "acuario":
        alert("Bienvenido Acuario");
        signoAire[2] = signoAire.cantidad++
        break;

        case "piscis":
        alert("Bienvenido Piscis");
        signoAgua[2] = signoAgua.cantidad++
        break;
// No ingreso nada o no ingreso correctamente
        default:
            alert('Nombre no existente, Ingresa tu signo zodiacal');
       if (inicio== ""){
        alert ('No ingresaste tu signo');
       }
//Esto ayudra a saber cuantas personas entran?
       const inicio=[]
for (let i=0; i<inicio.length; i++){
    alert(inicio[i]);
}
console.log(signos)
}
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


