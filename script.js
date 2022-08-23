const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])

let health = 200
let gameFrame = 0

// Making the game work by following the mouse
let canvasPosition = canvas.getBoundingClientRect ();
const mouse = {
    x: canvas.width/2,
    y: canvas.height/2,
    click: false,
}

canvas.addEventListener("mousedown", function (event) {
    mouse.click = true;
    mouse.x = event.x - canvasPosition.left,
    mouse.y = event.y - canvasPosition.top,
    console.log(mouse.x, mouse.y)
})

canvas.addEventListener("mouseup", function () {
    mouse.click = false;
})

class GamePiece {
    constructor(x, y, width, height, playerIcon) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.alive = true
        this.playerIcon = playerIcon

        const gameImage = new Image();
        gameImage.src = this.playerIcon
        gameImage.onload = () => {
            ctx.drawImage(gameImage, this.x, this.y, this.width, this.height)
        }
    }

}

const hermie = new GamePiece(10, 10, 50, 50, './images/Hermie.png')
const sandcastle = new GamePiece(200, 200, 60, 60, './images/sandcastle.jpeg')















// function movePiece () {
//     const dx = hermieImage.x - mouse.x;
//     const dy = hermieImage.y - mouse.y;
//     if (hermieImage.x != mouse.x) {
//         hermieImage.x -= dx/45;
//     }
//     if (hermieImage.y != mouse.y) {
//         hermieImage.y -= dy/45;
//     }
// }

// document.addEventListener("mousedown", movePiece)



console.log("I am working")