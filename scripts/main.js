function printarMensaje(){      
    console.log("hola mundo");
    alert("Em dic Ignasi!");
}
 
function pedirDatos(){
    let cog = prompt("dona'm el teu primer cognom:");
    let nom = prompt("ara només el teu nom:");
    console.log("Et dius " + nom + " " + cog);
}

function sumar(){
    let num1 = prompt("dona'm un numero:");
    let num2 = prompt("ara un segon numero:");
    let suma  = parseInt(num1) + parseInt(num2); 
    console.log("La suma de " + num1 + " i de " + num2 + " ens dóna com a resultat: " + suma);
}

function notaExamen(){
    let nota_examen = prompt("dona'm la teva nota que has tret:");
    // control de dades
    if (((nota_examen > 10) || (nota_examen < 0)) || (isNaN(nota_examen))) {
        msg = "no facis trampes...";

    // evaluació nota
    } else if (nota_examen < 5) {
        msg = "Llàstima, has suspès...  :'( ";    
        } else {
            msg = "Molt bé, has aprovat!!  :) ";        
        }
    
    // mostrar resultat
    alert(msg);        
}

function substParaula(){
    var frase = "Tinc un cotxe de color blau.";
    frase = frase.replace("blau","verd");
    console.log(frase);
    alert(frase);
    document.getElementById("mostrarDatos").innerHTML = "Resultat per pantalla .... : " + frase;
}

function substLletra(){
    var frase = "Tinc un cotxe de color blau.";
    // el modificador 'gi' significa global, és a dir, continuarà substituint fins al final de la frase
    frase = frase.replace(/o/gi,"u");
    console.log(frase);
    alert(frase);
    document.getElementById("mostrarDatos").innerHTML = "Resultat per pantalla .... : " + frase;
}

function llistes(){
    // let llistat = new Array();  ... es pot declarar amb 'new' però carrega en memoria masses funcions relacionades amb Objectes
	let llistat1 = ['taula', 'cadira', 'ordinador', 'llibreta'];
    let resultat = "";

    for (i=0; i < llistat1.length; i++){        
        resultat += " L'objecte " + llistat1[i] + " està en la posició " + i + ". <br>";
    }
    console.log(resultat);
    // accedim al DOM una sola vegada, sempre intentar de interactuar el minim possible
    document.getElementById("mostrarDatos").innerHTML = resultat;

    // ampliació 1 ... llista demanant elements al usuari per Prompt
    let element  = "";
	let llistat2 = [];    
    resultat     = "";

    for (i=0; i < 4; i++){
        element  = prompt("Escriu un element ("+i+" de 4): ");
        llistat2.push(element);
        resultat += " L'objecte " + llistat2[i] + " està en la posició " + i + ". <br>";
    }
    // tornem a accedir al DOM, perquè és un sub-exercici apart
    document.getElementById("mostrarDatos2").innerHTML = "Ampliació, mostrar un llistat demanat al usuari: <br><br> " + resultat;

    // ampliació 2 ... llista mostrada al inrevés
    llistat2.reverse();
    resultat = "";
    for (i=0; i < 4; i++){                
        resultat += " L'objecte " + llistat2[i] + " està en la posició " + i + ". <br>";
    }
    // tornem a accedir al DOM, perquè és un sub-exercici apart
    document.getElementById("mostrarDatos3").innerHTML = "Ampliació, mostrar llistat usuari al REVES: <br><br> " + resultat;
}
