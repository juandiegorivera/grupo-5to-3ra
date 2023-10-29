jQuery(document).ready(function($) {
    // Obtener elementos
    var cajagrande = $('#cajagrande'),
        cajita = $('#j2'),
        // Calcular ancho y alto
        w = cajagrande.height() - cajita.height(),
        // Objeto para almacenar estados de teclas
        d = {},
        // Distancia a mover
        x = 10;

    // Función para calcular la nueva posición
    function newv(v, a, b) {
        // Calcular la nueva posición
        var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
        // Devolver la nueva posición dentro de los límites
        return n < 0 ? 0 : n > w ? w : n;
    }

    // oyentes de eventos para keydown y keyup
    $(window).keydown(function(e) { d[e.which] = true; });
    $(window).keyup(function(e) { d[e.which] = false; });

    // Establecer intervalo para actualizar la posición
    setInterval(function() {
        cajita.css({
            top: function(i, v) { 
                // Calcular la nueva posición superior
                var cajitaTop = newv(v,38,40);
                // Asegurar que la posición superior esté dentro de los límites
                if (cajitaTop + cajita.height() > cajagrande.height ()) {
                    cajitaTop = cajagrande.height() - cajita.height ();
                }
                return cajitaTop; 
            }
        });
    }, 20);
});



jQuery(document).ready(function($) {
    var cajagrande = $('#cajagrande'),
        cajita = $('#j1'),
        w = cajagrande.height() - cajita.height(),
        d = {},
        x = 10;
    function newv(v, a, b) {
        var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
        return n < 0 ? 0 : n > w ? w : n;
    }

    $(window).keydown(function(e) { d[e.which] = true; });
    $(window).keyup(function(e) { d[e.which] = false; });

    setInterval(function() {
        cajita.css({
            top: function(i, v) { 
                var cajitaTop = newv(v, 87, 83);
                if (cajitaTop + cajita.height() > cajagrande.height()) {
                    cajitaTop = cajagrande.height() - cajita.height();
                }
                return cajitaTop; 
            }
        });
    }, 20);
});


const grid = document.querySelector("#cajagrande");
const scoreDisplay = document.getElementById("vacio");
let vacio = 0;
const squares = [];

// 0 - pac-dots
// 1 - wall
// 2 - ghost-lair
// 3 - power-pellet
// 4 - empty
const layout = [
    2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1
];

function createPacBoard() {
    if (!grid) {
        console.error('El elemento grid no existe');
        return;
    }

    for (let i = 0; i < layout.length; i++) {
        const square = document.createElement("cajagrande");
        grid.appendChild(square);
        squares.push(square);
        

        // añadiendo las clases según el layout
        if (layout[i] === 0) {
            square.classList.add("vacio");
        } else if (layout[i] === 1) {
            square.classList.add("puntoj1");
        } else if (layout[i] === 2) {
            square.classList.add("puntoj2");
        }
    }
}

createPacBoard();




document.getElementById("5").addEventListener("click", function() {
        /* cambiar valor a elementos unicos */
    document.getElementById("box").style.background = 'repeating-conic-gradient(from var(--a), #520000 80%, #cf0000 90%, transparent 5%,transparent 70%,#ff0000 100%)';
    document.getElementById("j1").style.border = '2px solid red';
    document.getElementById("j2").style.border = '2px solid red';
    /* recorrer elementos class */
    /* barritas del medio */
    let palitos = document.getElementsByClassName("palitos");
    for (let i = 0; i < palitos.length; i++) {
        palitos[i].style.border = '1.5px solid red';
        palitos[i].style['box-shadow'] = '0 0 0.4em rgb(170, 0, 0)';
    }
    /* bordes de la configuracion */
    let bordes = document.getElementsByClassName("remarcar");
    for (let i = 0; i < bordes.length; i++) {
        bordes[i].style.border = '3px solid rgb(255, 0, 0)';
    }
    /* color de los controles y jugadores */
    let titulos = document.getElementsByClassName("letra");
    for (let i = 0; i < titulos.length; i++) {
        titulos[i].style['text-shadow'] = '0 0 0.4em rgb(255, 0, 0), 0 0 0.4em rgb(255, 0, 0)';
        titulos[i].style['-webkit-text-stroke'] = '1px rgb(255, 0, 0)';
    }
    /* cambio de color a la configuracion */
    let letraconfig = document.getElementsByClassName("nom");
    for (let i = 0; i < letraconfig.length; i++) {
        letraconfig[i].style['text-shadow'] = '0 0 0.1em rgb(255, 0, 0), 0 0 0.1em rgb(255, 0, 0)';
        letraconfig[i].style['-webkit-text-stroke'] = '1px rgb(255, 0, 0)';
    }
    /* cambiar color a los botones grandes */
    let botong = document.getElementsByClassName("boton");
    for (let i = 0; i < botong.length; i++) {
        botong[i].style['background-image'] = 'linear-gradient(to bottom, #ff0000, #000000)';
        botong[i].style['box-shadow'] = '3px 3px 3px 3px #980000';
    }
    /* label */
    let label = document.getElementsByClassName("dalt");
    for (let i = 0; i < label.length; i++) {
        label[i].style.color = 'rgb(255, 0, 0)';
    }
    /* volumenes */
    let vol = document.getElementsByClassName("volumenes");
    for (let i = 0; i < vol.length; i++) {
        vol[i].style.color = 'rgb(255, 0, 0)';
    }
    /* botones de puntos */
    let elegirpuntos = document.getElementsByClassName("botones");
    for (let i = 0; i < elegirpuntos.length; i++) {
        elegirpuntos[i].style['background-image'] = 'linear-gradient(to bottom, #ff0000, #000000)';
    }
});




document.getElementById("10").addEventListener("click", function() {
    /* cambiar valor a elementos unicos */
    document.getElementById("box").style.background = 'repeating-conic-gradient(from var(--a), #000152 80%, #000acf 90%, transparent 5%,transparent 70%,#0008ff 100%)';
    document.getElementById("j1").style.border = '2px solid blue';
    document.getElementById("j2").style.border = '2px solid blue';
    /* recorrer elementos class */
    /* bordes de la configuracion */
    let bordes = document.getElementsByClassName("remarcar");
    for (let i = 0; i < bordes.length; i++) {
        bordes[i].style.border = '3px solid rgb(0, 51, 255)';
    }
    /* color de los controles y jugadores */
    let titulos = document.getElementsByClassName("letra");
    for (let i = 0; i < titulos.length; i++) {
        titulos[i].style['text-shadow'] = '0 0 0.4em rgb(0, 0, 255), 0 0 0.4em rgb(0, 0, 255)';
        titulos[i].style['-webkit-text-stroke'] = '1px rgb(0, 0, 255)';
    }
    /* cambio de color a la configuracion */
    let letraconfig = document.getElementsByClassName("nom");
    for (let i = 0; i < letraconfig.length; i++) {
        letraconfig[i].style['text-shadow'] = '0 0 0.1em rgb(0, 0, 255), 0 0 0.1em rgb(0, 0, 255)';
        letraconfig[i].style['-webkit-text-stroke'] = '1px rgb(0, 0, 255)';
    }
    /* barritas del medio */
    let palitos = document.getElementsByClassName("palitos");
    for (let i = 0; i < palitos.length; i++) {
        palitos[i].style.border = '1.5px solid blue';
        palitos[i].style['box-shadow'] = '0 0 0.4em rgb(0, 3, 170)';
    }
    /* label */
    let label = document.getElementsByClassName("dalt");
    for (let i = 0; i < label.length; i++) {
        label[i].style.color = 'rgb(0, 8, 255)';
    }
    /* cambiar color a los botones grandes */
    let botong = document.getElementsByClassName("boton");
    for (let i = 0; i < botong.length; i++) {
        botong[i].style['background-image'] = 'linear-gradient(to bottom, #0004ff, #000000)';
        botong[i].style['box-shadow'] = '3px 3px 3px 3px #000098';
    }
    /* volumenes */
    let vol = document.getElementsByClassName("volumenes");
    for (let i = 0; i < vol.length; i++) {
        vol[i].style.color = 'rgb(0, 8, 255)';
    }
        /* botones de puntos */
        let elegirpuntos = document.getElementsByClassName("botones");
        for (let i = 0; i < elegirpuntos.length; i++) {
            elegirpuntos[i].style['background-image'] = 'linear-gradient(to bottom, #0004ff, #000000)';
        }
});

document.getElementById("15").addEventListener("click", function() {
    document.getElementById("box").style.background = 'repeating-conic-gradient(from var(--a), #0c5200 80%, #3bcf00 90%, transparent 5%,transparent 70%,#44ff00 100%)';

});

document.getElementById("20").addEventListener("click", function() {
    document.getElementById("box").style.background = 'repeating-conic-gradient(from var(--a), #470052 80%, #9800cf 90%, transparent 5%,transparent 70%,#bb00ff 100%)';
});

