window.addEventListener("load", init);
const animales = ["cerdo", "gato", "perro", "vaca", "zorro", "burro", "rana", "leon"];
const movimiento = ["rota", "grande", "pequenio", "baja", "def"];


function init() {
    var contenedor = document.createElement("div");
    contenedor.setAttribute("id", "animales");
    document.body.appendChild(contenedor);

    for (let i = 0; i < animales.length; i++) {
        contenedor.appendChild(generarDivs(i));
    }
    if (document.getElementById("audio") == null) {
        let audio = document.createElement("audio");
        audio.setAttribute("id", "audio");
        audio.setAttribute("preload", "auto");

        let source = document.createElement("source");
        source.setAttribute("id", "source");
        source.setAttribute("type", "audio/wav");
        
        audio.appendChild(source);
        
        contenedor.appendChild(audio);
    }
}

function generarDivs(posicion) {
    let animal = document.createElement("div");
    animal.setAttribute("id", animales[posicion]);
    animal.classList.add( "animal");
    animal.style.backgroundImage = "url" + "(" + "/images/" + animales[posicion] + ".png" + ")";
     animal.addEventListener("click", manejadora);
    return animal;
}


function cambiarSonidos(evento) {
    let audio = document.getElementById("audio");
    let source = document.getElementById("source");
    source.setAttribute("src", "/sounds/" + evento.target.id + ".wav");
    audio.load();
    audio.play();


}

function mover(evento) {
    var atributo = evento.target.getAttribute("class");
    var array = atributo.split(" ", 2);
    switch (array.length) {
        case (1):
            evento.target.setAttribute("class", "animal " + movimiento[Math.floor(Math.random() * movimiento.length)]);
            break;
        case (2):
            evento.target.className = "animal";
            var newAtributo = movimiento[Math.floor(Math.random() * movimiento.length)];
            while (array[1] === newAtributo) {
                newAtributo = movimiento[Math.floor(Math.random() * movimiento.length)];
            }
            evento.target.className = "animal " + newAtributo;
    }
}

function manejadora(evento) {
    mover(evento);
    cambiarSonidos(evento);
}

