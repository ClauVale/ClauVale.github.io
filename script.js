/* el documento object modelo objeto del documento

objeto en javascript, por lo tanto va a tener prioridades y comportamientos asociados 
atributos y fuciones (metodos)

es en forma mas sencilla una variable en JS que va a traer una abstraccion de mi documento HTML.
*/

const nombre = "claudia";
let edad = 20;

// tipo de cajon 
// ()
const scoobydoo = {
    raza: "gran danes",
    nopatas:  4,

    color: "cafe"
}
    // no funciona scobydoo= algo
    scoobydoo.color = "cafe negro"

    //alert("hola")
    console.log("hola" , nombre)
    //7document.write("hola")

let  titulo  = document.getElementById(' titulo ');
console.log(titulo);


let   objetodelabibliotecatypewriter = new Typewriter(titulo, {
        loop: true
    });
    objetodelabibliotecatypewriter

        .typeString('BIENVENIDA A MI PORTAFOLIO')
        .pauseFor(500)
        .deleteAll()
        .typeString('WELCOME TO MY PORTFOLIO')
        .pauseFor(850)
        .deleteChars(200)
        .start();