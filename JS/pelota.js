document.body.style.margin = 0
document.body.style.padding = 0
document.body.style.overflow = 'hidden'

const canvas = document.getElementById('juego')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext('2d')

const pelota = {
    x: 100,
    y: 100,
    vspeed: 20,
    hspeed: 20,
    color: 'red',
    radius: 15
}


setInterval (() => {

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    //actualización de dirección
    pelota.x += pelota.hspeed
    pelota.y += pelota.vspeed

    //colición abajo y arriba
    if(pelota.y + pelota.radius >= canvas.height || pelota.y - pelota.radius <= 0)
        pelota.vspeed = -pelota.vspeed
    
    //colición derecha e izquierda
    if(pelota.x + pelota.radius >= canvas.width || pelota.x - pelota.radius <= 0)
        pelota.hspeed = -pelota.hspeed
    
    //dibujar
    ctx.beginPath()
    ctx.arc(pelota.x, pelota.y, pelota.radius, 0, 2 * Math.PI)
    ctx.fillstyle = pelota.color
    ctx.fill()
}, 1000 / 60)
