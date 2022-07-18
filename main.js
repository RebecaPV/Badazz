
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
        Swal.fire({
            title: 'Bienvenido Aries',
            icon:'success',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });
        signoFuego[0] = signoFuego.cantidad++
        break;

        case "tauro":
            Swal.fire({
                title: 'Bienvenido Tauro',
                icon:'success',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });
        signoTierra[0] = signoTierra.cantidad++
        break;

        case "geminis":
            Swal.fire({
                title: 'Bienvenido Géminis',
                icon:'success',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });
        signoAire[1] = signoAire.cantidad++
        break;

        case "cancer":
            Swal.fire({
                title: 'Bienvenido Cáncer',
                icon:'success',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });
        signoAgua[0] = signoAgua.cantidad++
        break;

        case "leo":
            Swal.fire({
                title: 'Bienvenido Leo',
                icon:'success',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });
        signoFuego[1] = signoFuego.cantidad++
        break;

        case "virgo":
            Swal.fire({
                title: 'Bienvenido Virgo',
                icon:'success',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });
        signoTierra[1] = signoTierra.cantidad++
        break;

        case "libra":
            Swal.fire({
                title: 'Bienvenido Libra',
                icon:'success',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });
        signoAire[2] = signoAire.cantidad++
        break;

        case "escorpio":
            Swal.fire({
                title: 'Bienvenido Escorpio',
                icon:'success',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });
        signoAgua[1] = signoAgua.cantidad++
        break;

        case "sagitario":
            Swal.fire({
                title: 'Bienvenido Sagitario',
                icon:'success',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });
        signoFuego[2] = signoFuego.cantidad++
        break;

        case "capricornio":
            Swal.fire({
                title: 'Bienvenido Capricornio',
                icon:'success',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });
        signoTierra[2] = signoTierra.cantidad++
        break;

        case "acuario":
            Swal.fire({
                title: 'Bienvenido Acuario',
                icon:'success',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });
        signoAire[2] = signoAire.cantidad++
        break;

        case "piscis":
            Swal.fire({
                title: 'Bienvenido Piscis',
                icon:'success',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });
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


let titulo = document.getElementById('signos');
let descripcion = document.getElementById('edadPersona');
let buscar = document.getElementById('buscar');
let resultado = document.getElementById('resultado');


buscar.addEventListener('click',() => {
    const data = {
        title: titulo.value,
        body: descripcion.value,
    }

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })

});