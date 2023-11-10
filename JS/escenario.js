jQuery(document).ready(function ($) {
    // Obtener elementos
    var cajagrande = $('#cajagrande'),
        j1 = $('#j2'),
        // Calcular ancho y alto
        w = cajagrande.height() - j1.height(),
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
    $(window).keydown(function (e) { d[e.which] = true; });
    $(window).keyup(function (e) { d[e.which] = false; });

    // Establecer intervalo para actualizar la posición
    setInterval(function () {
        j1.css({
            top: function (i, v) {
                // Calcular la nueva posición superior
                var cajitaTop = newv(v, 38, 40);
                // Asegurar que la posición superior esté dentro de los límites
                if (cajitaTop + j1.height() > cajagrande.height()) {
                    cajitaTop = cajagrande.height() - j1.height();
                }
                return cajitaTop;
            }
        });
    }, 20);
});



jQuery(document).ready(function ($) {
    var cajagrande = $('#cajagrande'),
        j2 = $('#j1'),
        w = cajagrande.height() - j2.height(),
        d = {},
        x = 10;
    function newv(v, a, b) {
        var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
        return n < 0 ? 0 : n > w ? w : n;
    }

    $(window).keydown(function (e) { d[e.which] = true; });
    $(window).keyup(function (e) { d[e.which] = false; });

    setInterval(function () {
        j2.css({
            top: function (i, v) {
                var cajitaTop = newv(v, 87, 83);
                if (cajitaTop + j2.height() > cajagrande.height()) {
                    cajitaTop = cajagrande.height() - j2.height();
                }
                return cajitaTop;
            }
        });
    }, 20);
});






document.getElementById("5").addEventListener("click", function () {
    /* cambiar valor a elementos unicos */
    document.getElementById("box").style.background = 'repeating-conic-gradient(from var(--a), #520000 80%, #cf0000 90%, transparent 5%,transparent 70%,#ff0000 100%)';
    document.getElementById("pelota").style.background = 'linear-gradient(45deg,#000000,#000000, #ff0000, #000000,#000000)';
    document.getElementById("pelota").style.border = '2px solid #ff0000';
    document.getElementById("j1").style.background = '#ff0000';
    document.getElementById("j2").style.background = '#ff0000';
    document.getElementById("cajaverdadera1").style.border = '2px solid #ff0000';
    document.getElementById("cajaverdadera2").style.border = '2px solid #ff0000';
    /* recorrer elementos class */
    /* barritas del medio */
    let palitos = document.getElementsByClassName("palitos");
    for (let i = 0; i < palitos.length; i++) {
        palitos[i].style.border = '1.5px solid #ff0000';
        palitos[i].style['box-shadow'] = '0 0 0.4em #ff0000';
    }
    /* bordes de la configuracion */
    let bordes = document.getElementsByClassName("remarcar");
    for (let i = 0; i < bordes.length; i++) {
        bordes[i].style.border = '3px solid #ff0000';
    }
    /* color de los controles y jugadores */
    let titulos = document.getElementsByClassName("letra");
    for (let i = 0; i < titulos.length; i++) {
        titulos[i].style['text-shadow'] = '0 0 0.4em #ff0000, 0 0 0.4em #ff0000';
        titulos[i].style['-webkit-text-stroke'] = '1px #ff0000';
    }
    /* cambio de color a la configuracion */
    let letraconfig = document.getElementsByClassName("nom");
    for (let i = 0; i < letraconfig.length; i++) {
        letraconfig[i].style['text-shadow'] = '0 0 0.1em #ff0000, 0 0 0.1em #ff0000';
        letraconfig[i].style['-webkit-text-stroke'] = '1px #ff0000';
    }
    /* cambiar color a los botones grandes */
    let botong = document.getElementsByClassName("boton");
    for (let i = 0; i < botong.length; i++) {
        botong[i].style['background-image'] = 'linear-gradient(to bottom, #ff0000, #000000)';
        botong[i].style['box-shadow'] = '3px 3px 3px 3px #ff0000';
    }
    /* label */
    let label = document.getElementsByClassName("dalt");
    for (let i = 0; i < label.length; i++) {
        label[i].style.color = '#ff0000';
        label[i].style['text-shadow'] = '0 0 0.01em #ff0000, 0 0 0.01em #ff0000';
        label[i].style['-webkit-text-stroke'] = '0.01px #ff0000';
    }
    /* volumenes */
    let vol = document.getElementsByClassName("volumenes");
    for (let i = 0; i < vol.length; i++) {
        vol[i].style.color = '#ff0000';
    }
    /* botones de puntos */
    let elegirpuntos = document.getElementsByClassName("botones");
    for (let i = 0; i < elegirpuntos.length; i++) {
        elegirpuntos[i].style['background-image'] = 'linear-gradient(to bottom, #ff0000, #000000)';
    }
});




document.getElementById("10").addEventListener("click", function () {
    /* cambiar valor a elementos unicos */
    document.getElementById("box").style.background = 'repeating-conic-gradient(from var(--a), #000152 80%, #000acf 90%, transparent 5%,transparent 70%,#0008ff 100%)';
    document.getElementById("pelota").style.background = 'linear-gradient(45deg,#000000,#000000, #0004ff, #000000,#000000)';
    document.getElementById("pelota").style.border = '2px solid #0004ff';
    document.getElementById("j1").style.background = '#0004ff';
    document.getElementById("j2").style.background = '#0004ff';
    document.getElementById("cajaverdadera1").style.border = '2px solid #0004ff';
    document.getElementById("cajaverdadera2").style.border = '2px solid #0004ff';
    /* recorrer elementos class */
    /* bordes de la configuracion */
    let bordes = document.getElementsByClassName("remarcar");
    for (let i = 0; i < bordes.length; i++) {
        bordes[i].style.border = '3px solid #0004ff';
    }
    /* color de los controles y jugadores */
    let titulos = document.getElementsByClassName("letra");
    for (let i = 0; i < titulos.length; i++) {
        titulos[i].style['text-shadow'] = '0 0 0.4em #0004ff, 0 0 0.4em #0004ff';
        titulos[i].style['-webkit-text-stroke'] = '1px #0004ff';
    }
    /* cambio de color a la configuracion */
    let letraconfig = document.getElementsByClassName("nom");
    for (let i = 0; i < letraconfig.length; i++) {
        letraconfig[i].style['text-shadow'] = '0 0 0.1em #0004ff, 0 0 0.1em #0004ff';
        letraconfig[i].style['-webkit-text-stroke'] = '1px #0004ff';
    }
    /* barritas del medio */
    let palitos = document.getElementsByClassName("palitos");
    for (let i = 0; i < palitos.length; i++) {
        palitos[i].style.border = '1.5px solid blue';
        palitos[i].style['box-shadow'] = '0 0 0.4em #0004ff';
    }
    /* label */
    let label = document.getElementsByClassName("dalt");
    for (let i = 0; i < label.length; i++) {
        label[i].style.color = '#0004ff';
        label[i].style['text-shadow'] = '0 0 0.01em #0004ff, 0 0 0.01em #0004ff';
        label[i].style['-webkit-text-stroke'] = '0.01px #0004ff';
    }
    /* cambiar color a los botones grandes */
    let botong = document.getElementsByClassName("boton");
    for (let i = 0; i < botong.length; i++) {
        botong[i].style['background-image'] = 'linear-gradient(to bottom, #0004ff, #000000)';
        botong[i].style['box-shadow'] = '3px 3px 3px 3px #0004ff';
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

document.getElementById("15").addEventListener("click", function () {
    /* cambiar valor a elementos unicos */
    document.getElementById("box").style.background = 'repeating-conic-gradient(from var(--a), #0c5200 80%, #3bcf00 90%, transparent 5%,transparent 70%,#44ff00 100%)';
    document.getElementById("pelota").style.background = 'linear-gradient(45deg,#000000,#000000, #3bcf00, #000000,#000000)';
    document.getElementById("pelota").style.border = '2px solid #3bcf00';
    document.getElementById("j1").style.background = '#3bcf00';
    document.getElementById("j2").style.background = '#3bcf00';
    document.getElementById("cajaverdadera1").style.border = '2px solid #3bcf00';
    document.getElementById("cajaverdadera2").style.border = '2px solid #3bcf00';
    /* recorrer elementos class */
    /* bordes de la configuracion */
    let bordes = document.getElementsByClassName("remarcar");
    for (let i = 0; i < bordes.length; i++) {
        bordes[i].style.border = '3px solid #3bcf00';
    }
    /* color de los controles y jugadores */
    let titulos = document.getElementsByClassName("letra");
    for (let i = 0; i < titulos.length; i++) {
        titulos[i].style['text-shadow'] = '0 0 0.4em #3bcf00, 0 0 0.4em #3bcf00';
        titulos[i].style['-webkit-text-stroke'] = '1px #3bcf00';
    }
    /* cambio de color a la configuracion */
    let letraconfig = document.getElementsByClassName("nom");
    for (let i = 0; i < letraconfig.length; i++) {
        letraconfig[i].style['text-shadow'] = '0 0 0.1em #3bcf00, 0 0 0.1em #3bcf00';
        letraconfig[i].style['-webkit-text-stroke'] = '1px #3bcf00';
    }
    /* barritas del medio */
    let palitos = document.getElementsByClassName("palitos");
    for (let i = 0; i < palitos.length; i++) {
        palitos[i].style.border = '1.5px solid #3bcf00';
        palitos[i].style['box-shadow'] = '0 0 0.4em #3bcf00';
    }
    /* label */
    let label = document.getElementsByClassName("dalt");
    for (let i = 0; i < label.length; i++) {
        label[i].style.color = '#3bcf00';
        label[i].style['text-shadow'] = '0 0 0.01em #3bcf00, 0 0 0.01em #3bcf00';
        label[i].style['-webkit-text-stroke'] = '0.01px #3bcf00';
    }
    /* cambiar color a los botones grandes */
    let botong = document.getElementsByClassName("boton");
    for (let i = 0; i < botong.length; i++) {
        botong[i].style['background-image'] = 'linear-gradient(to bottom, #3bcf00, #000000)';
        botong[i].style['box-shadow'] = '3px 3px 3px 3px #3bcf00';
    }
    /* volumenes */
    let vol = document.getElementsByClassName("volumenes");
    for (let i = 0; i < vol.length; i++) {
        vol[i].style.color = '#3bcf00';
    }
    /* botones de puntos */
    let elegirpuntos = document.getElementsByClassName("botones");
    for (let i = 0; i < elegirpuntos.length; i++) {
        elegirpuntos[i].style['background-image'] = 'linear-gradient(to bottom, #3bcf00, #000000)';
    }
});

document.getElementById("20").addEventListener("click", function () {
    /* cambiar valor a elementos unicos */
    document.getElementById("box").style.background = 'repeating-conic-gradient(from var(--a), #470052 80%, #9800cf 90%, transparent 5%,transparent 70%,#bb00ff 100%)';
    document.getElementById("pelota").style.background = 'linear-gradient(45deg,#000000,#000000, #9800cf, #000000,#000000)';
    document.getElementById("pelota").style.border = '2px solid #9800cf';
    document.getElementById("j1").style.background = '#9800cf';
    document.getElementById("j2").style.background = '#9800cf';
    document.getElementById("cajaverdadera1").style.border = '2px solid #9800cf';
    document.getElementById("cajaverdadera2").style.border = '2px solid #9800cf';
    /* recorrer elementos class */
    /* bordes de la configuracion */
    let bordes = document.getElementsByClassName("remarcar");
    for (let i = 0; i < bordes.length; i++) {
        bordes[i].style.border = '3px solid #9800cf';
    }
    /* color de los controles y jugadores */
    let titulos = document.getElementsByClassName("letra");
    for (let i = 0; i < titulos.length; i++) {
        titulos[i].style['text-shadow'] = '0 0 0.4em #9800cf, 0 0 0.4em #9800cf';
        titulos[i].style['-webkit-text-stroke'] = '1px #9800cf';
    }
    /* cambio de color a la configuracion */
    let letraconfig = document.getElementsByClassName("nom");
    for (let i = 0; i < letraconfig.length; i++) {
        letraconfig[i].style['text-shadow'] = '0 0 0.1em #9800cf, 0 0 0.1em #9800cf';
        letraconfig[i].style['-webkit-text-stroke'] = '1px #9800cf';
    }
    /* barritas del medio */
    let palitos = document.getElementsByClassName("palitos");
    for (let i = 0; i < palitos.length; i++) {
        palitos[i].style.border = '1.5px solid #9800cf';
        palitos[i].style['box-shadow'] = '0 0 0.4em #9800cf';
    }
    /* label */
    let label = document.getElementsByClassName("dalt");
    for (let i = 0; i < label.length; i++) {
        label[i].style.color = '#9800cf';
        label[i].style['text-shadow'] = '0 0 0.01em #9800cf, 0 0 0.01em #9800cf';
        label[i].style['-webkit-text-stroke'] = '0.01px #9800cf';
    }
    /* cambiar color a los botones grandes */
    let botong = document.getElementsByClassName("boton");
    for (let i = 0; i < botong.length; i++) {
        botong[i].style['background-image'] = 'linear-gradient(to bottom, #9800cf, #000000)';
        botong[i].style['box-shadow'] = '3px 3px 3px 3px #9800cf';
    }
    /* volumenes */
    let vol = document.getElementsByClassName("volumenes");
    for (let i = 0; i < vol.length; i++) {
        vol[i].style.color = '#9800cf';
    }
    /* botones de puntos */
    let elegirpuntos = document.getElementsByClassName("botones");
    for (let i = 0; i < elegirpuntos.length; i++) {
        elegirpuntos[i].style['background-image'] = 'linear-gradient(to bottom, #9800cf, #000000)';
    }
});

jQuery(document).ready(function($) {
    // Obtener elementos
    var cajagrande = $('#cajagrande'),
        pelota = $('#pelota'),
        j2 = $('#j2'),
        j1 = $('#j1'),
        // Calcular ancho y alto
        w = cajagrande.width() - pelota.width(),
        h = cajagrande.height() - pelota.height();
        contador1=0;
        contador2=0;
        limitePuntuacion = 5;
        document.getElementById("5").addEventListener("click", function () {
            limitePuntuacion = 5;
            contador1=0;
            contador2=0;
        });
        document.getElementById("10").addEventListener("click", function () {
            limitePuntuacion = 10;
            contador1=0;
            contador2=0;
        });
        document.getElementById("15").addEventListener("click", function () {
            limitePuntuacion = 15;
            contador1=0;
            contador2=0;
        });
        document.getElementById("20").addEventListener("click", function () {
            limitePuntuacion = 20;
        });
        document.onkeyup = function(event) {
            var key = event.key;
                if (key === "p" || key === "P") {
                // Variables para almacenar la dirección en x e y
                var direccionX = -1, // Cambié el valor inicial a -1 para que la pelota se mueva hacia la izquierda
                direccionY = 1,
                paso = 5; // Número de píxeles que la pelota se moverá en cada iteración
            // Establecer intervalo para actualizar la posición
            setInterval(function() {
                // Calcular posiciones actuales en eje x e y
                var posX = pelota.position().left,
                    posY = pelota.position().top;
            
                // Calcular las nuevas posiciones
                var nuevaPosX = posX + (direccionX * paso),
                    nuevaPosY = posY + (direccionY * paso);
            
                // Verificar colisión con los límites y ajustar la posición si es necesario
                if (nuevaPosX <= 0) {
                    nuevaPosX = 0;
                    direccionX = 1; // Cambiar dirección hacia la derecha sumar jugador 2
                    function cambiarpuntoj1() {
                        contador1+=1
                        var puntoj1 = document.getElementsByClassName("puntoj2");
                        puntoj1[0].textContent = contador1; // Asignar el valor de direccionX al contenido del primer elemento con la clase "puntoj1"
                    }
                    cambiarpuntoj1();
                } else if (nuevaPosX >= w) {
                    function cambiarpuntoj2() {
                        contador2+=1
                        var puntoj2 = document.getElementsByClassName("puntoj1");
                        puntoj2[0].textContent = contador2; // Asignar el valor de direccionX al contenido del primer elemento con la clase "puntoj1"
                    }
                    cambiarpuntoj2();
                    nuevaPosX = w;
                    direccionX = -1; // Cambiar dirección hacia la izquierda 
                }
            
                if (nuevaPosY <= 0) {
                    nuevaPosY = 0;
                    direccionY = 1; // Cambiar dirección hacia abajo
                } else if (nuevaPosY >= h) {
                    nuevaPosY = h;
                    direccionY = -1; // Cambiar dirección hacia arriba
                }
            
                // Verificar colisión con los elementos j1 y j2 y ajustar la dirección si es necesario
                if (nuevaPosY >= j1.position().top && nuevaPosY <= j1.position().top + j1.height() &&
                    nuevaPosX <= j1.position().left + j1.width() && nuevaPosX >= j1.position().left - pelota.width()) {
                    direccionX = 1; // Cambiar dirección hacia la derecha
                }
            
                if (nuevaPosY >= j2.position().top && nuevaPosY <= j2.position().top + j2.height() &&
                    nuevaPosX + pelota.width() >= j2.position().left && nuevaPosX <= j2.position().left + j2.width()) {
                    direccionX = -1; // Cambiar dirección hacia la izquierda
            
                }
                function verificarGanador() {
                    if (contador1 == limitePuntuacion) {
                        alert("te domo el jugador 2");
                        pelota = $('#pelot');
                    } else if (contador2 == limitePuntuacion) {
                        alert("te domo el jugador 1");
                        pelota = $('#pelot');
                    }
                }
                    // Mover la pelota a la nueva posición con una cantidad de píxeles (paso)
                    pelota.css({
                        left: nuevaPosX + "px",
                        top: nuevaPosY + "px"
                    });
                // Verificar si alguien ha ganado y reiniciar el juego si es necesario
                verificarGanador();
            }, 10); // Actualizar la posición de la pelota cada 20 ms
            }
        }
});




/* 

$("#score").html(limitePuntuacion+"-"+limitePuntuacion); */ 

/* DALTONISMO  */
/* deuteranomalia/protanopia (nivel 1) */
document.getElementById("deuprotn1").addEventListener("click", function () {
    /* cambiar valor a elementos unicos */
    document.getElementById("box").style.background = 'repeating-conic-gradient(from var(--a), #bdff00 80%, #CBFD3B 90%, transparent 5%,transparent 70%,#DCFF75 100%)';
    document.getElementById("pelota").style.background = 'linear-gradient(45deg,#000000,#000000, #bdff00, #000000,#000000)';
    document.getElementById("pelota").style.border = '2px solid #bdff00';
    document.getElementById("j1").style.background = '#bdff00';
    document.getElementById("j2").style.background = '#bdff00';
    document.getElementById("cajaverdadera1").style.border = '2px solid #bdff00';
    document.getElementById("cajaverdadera2").style.border = '2px solid #BDFF00';
    /* recorrer elementos class */
    /* bordes de la configuracion */
    let bordes = document.getElementsByClassName("remarcar");
    for (let i = 0; i < bordes.length; i++) {
        bordes[i].style.border = '3px solid #bdff00';
    }
    /* color de los controles y jugadores */
    let titulos = document.getElementsByClassName("letra");
    for (let i = 0; i < titulos.length; i++) {
        titulos[i].style['text-shadow'] = '0 0 0.4em #bdff00, 0 0 0.4em #bdff00';
        titulos[i].style['-webkit-text-stroke'] = '1px #bdff00';
    }
    /* cambio de color a la configuracion */
    let letraconfig = document.getElementsByClassName("nom");
    for (let i = 0; i < letraconfig.length; i++) {
        letraconfig[i].style['text-shadow'] = '0 0 0.1em #bdff00, 0 0 0.1em #bdff00';
        letraconfig[i].style['-webkit-text-stroke'] = '1px #bdff00';
    }
    /* barritas del medio */
    let palitos = document.getElementsByClassName("palitos");
    for (let i = 0; i < palitos.length; i++) {
        palitos[i].style.border = '1.5px solid #bdff00';
        palitos[i].style['box-shadow'] = '0 0 0.4em #bdff00';
    }
    /* label */
    let label = document.getElementsByClassName("dalt");
    for (let i = 0; i < label.length; i++) {
        label[i].style.color = '#bdff00';
        label[i].style['text-shadow'] = '0 0 0.01em #bdff00, 0 0 0.01em #bdff00';
        label[i].style['-webkit-text-stroke'] = '0.01px #bdff00';
    }
    /* cambiar color a los botones grandes */
    let botong = document.getElementsByClassName("boton");
    for (let i = 0; i < botong.length; i++) {
        botong[i].style['background-image'] = 'linear-gradient(to bottom, #bdff00, #000000)';
        botong[i].style['box-shadow'] = '3px 3px 3px 3px #bdff00';
    }
    /* volumenes */
    let vol = document.getElementsByClassName("volumenes");
    for (let i = 0; i < vol.length; i++) {
        vol[i].style.color = '#bdff00';
    }
    /* botones de puntos */
    let elegirpuntos = document.getElementsByClassName("botones");
    for (let i = 0; i < elegirpuntos.length; i++) {
        elegirpuntos[i].style['background-image'] = 'linear-gradient(to bottom, #bdff00, #000000)';
    }
});

/* Trinatopia nivel 3 */
document.getElementById("trin3").addEventListener("click", function () {
    /* cambiar valor a elementos unicos */
    document.getElementById("box").style.background = 'repeating-conic-gradient(from var(--a), #00FFF7 80%, #b0fffe 90%, transparent 5%,transparent 70%,#e0ffff 100%)';
    document.getElementById("pelota").style.background = 'linear-gradient(45deg,#000000,#000000, #00FFF7, #000000,#000000)';
    document.getElementById("pelota").style.border = '2px solid #00FFF7';
    document.getElementById("j1").style.background = '#00FFF7';
    document.getElementById("j2").style.background = '#00FFF7';
    document.getElementById("cajaverdadera1").style.border = '2px solid #00FFF7';
    document.getElementById("cajaverdadera2").style.border = '2px solid #00FFF7';
    /* recorrer elementos class */
    /* bordes de la configuracion */
    let bordes = document.getElementsByClassName("remarcar");
    for (let i = 0; i < bordes.length; i++) {
        bordes[i].style.border = '3px solid #00FFF7';
    }
    /* color de los controles y jugadores */
    let titulos = document.getElementsByClassName("letra");
    for (let i = 0; i < titulos.length; i++) {
        titulos[i].style['text-shadow'] = '0 0 0.4em #00FFF7, 0 0 0.4em #00FFF7';
        titulos[i].style['-webkit-text-stroke'] = '1px #00FFF7';
    }
    /* cambio de color a la configuracion */
    let letraconfig = document.getElementsByClassName("nom");
    for (let i = 0; i < letraconfig.length; i++) {
        letraconfig[i].style['text-shadow'] = '0 0 0.1em #00FFF7, 0 0 0.1em #00FFF7';
        letraconfig[i].style['-webkit-text-stroke'] = '1px #00FFF7';
    }
    /* barritas del medio */
    let palitos = document.getElementsByClassName("palitos");
    for (let i = 0; i < palitos.length; i++) {
        palitos[i].style.border = '1.5px solid #00FFF7';
        palitos[i].style['box-shadow'] = '0 0 0.4em #00FFF7';
    }
    /* label */
    let label = document.getElementsByClassName("dalt");
    for (let i = 0; i < label.length; i++) {
        label[i].style.color = '#00FFF7';
        label[i].style['text-shadow'] = '0 0 0.01em #00FFF7, 0 0 0.01em #00FFF7';
        label[i].style['-webkit-text-stroke'] = '0.01px #00FFF7';
    }
    /* cambiar color a los botones grandes */
    let botong = document.getElementsByClassName("boton");
    for (let i = 0; i < botong.length; i++) {
        botong[i].style['background-image'] = 'linear-gradient(to bottom, #00FFF7, #000000)';
        botong[i].style['box-shadow'] = '3px 3px 3px 3px #00FFF7';
    }
    /* volumenes */
    let vol = document.getElementsByClassName("volumenes");
    for (let i = 0; i < vol.length; i++) {
        vol[i].style.color = '#00FFF7';
    }
    /* botones de puntos */
    let elegirpuntos = document.getElementsByClassName("botones");
    for (let i = 0; i < elegirpuntos.length; i++) {
        elegirpuntos[i].style['background-image'] = 'linear-gradient(to bottom, #00FFF7, #000000)';
    }
});
/* Trinatopia nivel 4 */
document.getElementById("trin4").addEventListener("click", function () {
    /* cambiar valor a elementos unicos */
    document.getElementById("box").style.background = 'repeating-conic-gradient(from var(--a), #520000 80%, #cf0000 90%, transparent 5%,transparent 70%,#ff0000 100%)';
    document.getElementById("pelota").style.background = 'linear-gradient(45deg,#000000,#000000, #ff0000, #000000,#000000)';
    document.getElementById("pelota").style.border = '2px solid #ff0000';
    document.getElementById("j1").style.background = '#ff0000';
    document.getElementById("j2").style.background = '#ff0000';
    document.getElementById("cajaverdadera1").style.border = '2px solid #ff0000';
    document.getElementById("cajaverdadera2").style.border = '2px solid #ff0000';
    /* recorrer elementos class */
    /* barritas del medio */
    let palitos = document.getElementsByClassName("palitos");
    for (let i = 0; i < palitos.length; i++) {
        palitos[i].style.border = '1.5px solid #ff0000';
        palitos[i].style['box-shadow'] = '0 0 0.4em #ff0000';
    }
    /* bordes de la configuracion */
    let bordes = document.getElementsByClassName("remarcar");
    for (let i = 0; i < bordes.length; i++) {
        bordes[i].style.border = '3px solid #ff0000';
    }
    /* color de los controles y jugadores */
    let titulos = document.getElementsByClassName("letra");
    for (let i = 0; i < titulos.length; i++) {
        titulos[i].style['text-shadow'] = '0 0 0.4em #ff0000, 0 0 0.4em #ff0000';
        titulos[i].style['-webkit-text-stroke'] = '1px #ff0000';
    }
    /* cambio de color a la configuracion */
    let letraconfig = document.getElementsByClassName("nom");
    for (let i = 0; i < letraconfig.length; i++) {
        letraconfig[i].style['text-shadow'] = '0 0 0.1em #ff0000, 0 0 0.1em #ff0000';
        letraconfig[i].style['-webkit-text-stroke'] = '1px #ff0000';
    }
    /* cambiar color a los botones grandes */
    let botong = document.getElementsByClassName("boton");
    for (let i = 0; i < botong.length; i++) {
        botong[i].style['background-image'] = 'linear-gradient(to bottom, #ff0000, #000000)';
        botong[i].style['box-shadow'] = '3px 3px 3px 3px #ff0000';
    }
    /* label */
    let label = document.getElementsByClassName("dalt");
    for (let i = 0; i < label.length; i++) {
        label[i].style.color = '#ff0000';
        label[i].style['text-shadow'] = '0 0 0.01em #ff0000, 0 0 0.01em #ff0000';
        label[i].style['-webkit-text-stroke'] = '0.01px #ff0000';
    }
    /* volumenes */
    let vol = document.getElementsByClassName("volumenes");
    for (let i = 0; i < vol.length; i++) {
        vol[i].style.color = '#ff0000';
    }
    /* botones de puntos */
    let elegirpuntos = document.getElementsByClassName("botones");
    for (let i = 0; i < elegirpuntos.length; i++) {
        elegirpuntos[i].style['background-image'] = 'linear-gradient(to bottom, #ff0000, #000000)';
    }
});




