
/* //El usuario entra y escribe su signo , se le da la bianvenida, el objetivo es que podamos ver cuantas personas visitan al dia la pagina y de que signo son, 
asi mismo poder ver que signos son los que entran mas a la pagina y cual es el rango de edad del publico meta  */

//Ciclo de pregunta de signo y edad, para clasificar generacion de publico meta
for (let s=1; s<=4; s++){
    let inicio= (prompt('Ingesa tu signo zodiacal; en minusculas y sin acentos por favor .'));
    let edadPersona= parseInt(prompt('Ingresa tu edad por favor'));
        if (edadPersona <= 20) {
            alert("Tu usuario es genercion"+ " "+ "Z");
        }
        else if (edadPersona >=20 && edadPersona <=42) {
            alert("Tu usuario es genercion"+ " "+ "Y");
        }
        else if (edadPersona >42  && edadPersona <=62) {
            alert("Tu usuario es genercion"+ " "+ "X");
        }
switch(inicio){
    case "aries":
        alert("Bienvenido Aries");
        break;

        case "tauro":
        alert("Bienvenido Tauro");
        break;

        case "geminis":
        alert("Bienvenido Géminis");
        break;

        case "cancer":
        alert("Bienvenido Cáncer");
        break;

        case "leo":
        alert("Bienvenido Leo");
        break;

        case "virgo":
        alert("Bienvenido Virgo");
        break;

        case "libra":
        alert("Bienvenido Libra");
        break;

        case "escorpio":
        alert("Bienvenido Escorpio");
        break;

        case "sagitario":
        alert("Bienvenido Sagitario");
        break;

        case "capricornio":
        alert("Bienvenido Capricornio");
        break;

        case "acuario":
        alert("Bienvenido Acuario");
        break;

        case "piscis":
        alert("Bienvenido Piscis");
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
}
} 

//Clasificacion de signos para contar o saber cual signo entra mas
const signosDeFuego =["Aries","Leo","Sagitario"]
const signosDeTierra =["Tauro","Virgo","Capricornio"]
const signosDeAire =["Geminis","Libra","Acuario"]
const signosDeAgua =["Cancer","Escorpio","Piscis"]

const signosDelZodiaco = signosDeFuego.concat (signosDeTierra,signosDeAire,signosDeAgua)
console.log (signosDelZodiaco)

//Busqueda de signo que ingresa mas,o busqueda de correo que ingrese usuario? 




