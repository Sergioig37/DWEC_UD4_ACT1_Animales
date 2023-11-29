window.addEventListener("load", init);
const animales = ["cerdo", "gato", "perro", "vaca", "zorro", "burro", "rana", "leon"];
const movimiento = ["rota", "grande", "pequenio", "baja", "def"];


function init() {
    var contenedor = document.createElement("div");
    contenedor.setAttribute("id", "animales");
    document.body.appendChild(contenedor);
    while (animales.length !== 0) {
        contenedor.appendChild(generarDivs());
    }
    if (document.getElementById("audio") == null) {
        let audio = document.createElement("audio");
        let source = document.createElement("source");
        audio.appendChild(source);
        audio.setAttribute("id", "audio");
        audio.setAttribute("preload", "auto");
        source.setAttribute("id", "source");
        source.setAttribute("type", "audio/wav");
        document.body.appendChild(audio);
    }
    addEventos();
}

function generarDivs() {
    let animal = document.createElement("div");
    let posicionAleatoria = (Math.floor(Math.random() * animales.length));
    animal.setAttribute("id", animales[posicionAleatoria]);
    animal.setAttribute("class", "animal");
    animal.style.backgroundImage = "url" + "(" + "/images/" + animales[posicionAleatoria] + ".png" + ")";
    animales.splice(posicionAleatoria, 1);
    return animal;
}


// function cambiarSonidos(evento){
//     let audio = document.getElementById("audio");
//     let source = document.getElementById("source");
//     source.setAttribute("src", "/sounds/" + evento.target.id+ ".wav");

// }

function mover(evento) {
    var atributo = evento.target.getAttribute("class");
    var array = atributo.split(" ", 2);
    switch (array.length) {
        case (1):
            evento.target.setAttribute("class", "animal " + movimiento[Math.floor(Math.random() * movimiento.length)]);
            break;
        case (2):
            evento.target.setAttribute("class", "animal");
            var newAtributo = movimiento[Math.floor(Math.random() * movimiento.length)];
            while (array[1] == newAtributo) {
                newAtributo = movimiento[Math.floor(Math.random() * movimiento.length)];
            }
            evento.target.setAttribute("class", "animal " + movimiento[Math.floor(Math.random() * movimiento.length)]);
    }
}

function manejadora(evento) {
    mover(evento);
    // cambiarSonidos(evento);
}

function addEventos() {
    var animals = document.querySelectorAll(".animal");
    animals.forEach(element => {
        element.addEventListener("click", manejadora);
    });

}