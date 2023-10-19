jQuery(document).ready(function($) {
    // Obtener elementos
    var cajagrande = $('#cajagrande'),
        cajita = $('.j2'),
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
                var cajitaTop = newv(v, 38, 40);
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
        cajita = $('.j1'),
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


const width = 28;
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
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
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
            console.log("prueba");
        } else if (layout[i] === 1) {
            square.classList.add("");
        } else if (layout[i] === 3) {
            square.classList.add("");
        }
    }
}

createPacBoard();


