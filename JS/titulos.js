//en general el js solo sirve para que aparezcan estrellas de fondo 

//cantidad de estrellas
const stars = 400

//coloca estrella por estrella en las ubicaciones otorgadas por la otra función
for (let i =0; i < stars; i++) {
    let star = document.createElement("div")
    star.className = 'stars'
    var xy = randomPosition();
    star.style.top = xy[0] + 'px'
    star.style.left = xy[1] + 'px'
    document.body.append(star)
}

//como el nombre lo dice, genera en posiciones aleatorias para las estrellistas
function randomPosition() {
    var y = window.innerWidth
    var x = window.innerHeight
    var randomX = Math.floor(Math.random() * x)
    var randomY = Math.floor(Math.random() * y)
    return [randomX, randomY]
}