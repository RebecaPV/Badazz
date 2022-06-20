
/* //El usuario entra y escribe su signo , se le da la bianvenida, el objetivo es que podamos ver cuantas personas visitan al dia la pagina y de que signo son, 
asi mismo poder ver que signos son los que entran mas a la pagina y cual es el rango de edad del publico meta  */

//Ciclo de pregunta de signo y edad, para clasificar generacion de publico meta
for (let s=1; s<=4; s++){
    let inicio= (prompt('Ingesa tu signo zodiacal; en minusculas y sin acentos por favor .'));
    let edadPersona= parseInt(prompt('Ingresa tu edad por favor'));
//Clasificacion de signos para contar o saber cual signo entra mas
    let signos = ["fuego","tierra","aire","agua"];
        if (edadPersona <= 20) {
            alert("Tu usuario es genercion"+ " "+ "Z");
        }
        else if (edadPersona >=20 && edadPersona <=42) {
            alert("Tu usuario es genercion"+ " "+ "Y");
        }
        else if (edadPersona >42  && edadPersona <=62) {
            alert("Tu usuario es genercion"+ " "+ "X");
        }
        if (edadPersona== "" && edadPersona== NaN){
            alert ('No ingresaste tu edad');
            continue
           }
switch(inicio){
    case "aries":
        alert("Bienvenido Aries");
        signos[0] = signos[0] +1
        break;

        case "tauro":
        alert("Bienvenido Tauro");
        signos[1] = signos[1] +1
        break;

        case "geminis":
        alert("Bienvenido Géminis");
        signos[2] = signos[2] +1
        break;

        case "cancer":
        alert("Bienvenido Cáncer");
        signos[3] = signos[3] +1
        break;

        case "leo":
        alert("Bienvenido Leo");
        signos[0] = signos[0] +1
        break;

        case "virgo":
        alert("Bienvenido Virgo");
        signos[1] = signos[1] +1
        break;

        case "libra":
        alert("Bienvenido Libra");
        signos[2] = signos[2] +1
        break;

        case "escorpio":
        alert("Bienvenido Escorpio");
        signos[3] = signos[3] +1
        break;

        case "sagitario":
        alert("Bienvenido Sagitario");
        signos[0] = signos[0] +1
        break;

        case "capricornio":
        alert("Bienvenido Capricornio");
        signos[1] = signos[1] +1
        break;

        case "acuario":
        alert("Bienvenido Acuario");
        signos[2] = signos[2] +1
        break;

        case "piscis":
        alert("Bienvenido Piscis");
        signos[3] = signos[3] +1
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





