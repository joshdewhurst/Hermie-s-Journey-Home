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

        // creating a function to produce a new image when given a src as a parameter
        const gameImage = new Image();
        gameImage.src = this.playerIcon
        gameImage.onload = () => {
            ctx.drawImage(gameImage, this.x, this.y, this.width, this.height)
        }
    }


}

const hermie = new GamePiece(10, 10, 50, 50, './images/Hermie.png')
const sandcastle = new GamePiece(200, 200, 60, 60, './images/sandcastle.jpeg')
// const crab = new GamePiece(400, 200, 60, 60, './images/Crab.png')
const shell = new GamePiece(530, 130, 50, 50, './images/Shell.jpg')


function movePlayer (e) {
    console.log(e);
    const speed = 10;
    if (hermie.alive) {
        switch (e.key) {
            case('w'):
            hermie.y -= speed
            if (hermie.y < 0) {
                hermie.y = 0
            }
            break
            case('s'):
            hermie.y += speed
            if (hermie.y + hermie.height > canvas.height) {
                hermie.y = canvas.height - hermie.height
            }
            break
            case('a'):
            hermie.x -= speed
            if (hermie.x < 0) {
            hermie.x = 0
            }
            break
            case('d'):
            hermie.x += speed
            if (hermie.x + hermie.width > canvas.width) {
                hermie.x = canvas.width - hermie.width
            }
        }
        console.log(hermie.x, hermie.y)
    }
            }

document.addEventListener('keydown', movePlayer)

// having a running clock that shows how much time has passed
function timer () {
    let clock = document.getElementById("timer").innerText
    gameFrame ++
    clock = gameFrame
    console.log(clock)
}

// setInterval(timer, 1000)

// moving the crab piece

function moveCrab () {
    if (gameFrame > 5) {
        const crab = new GamePiece(400, 200, 60, 60, './images/Crab.png')
    }
}


console.log("I am working")

function runGame () {
    timer()
    moveCrab()
    setInterval(timer, 1000)
}

runGame ()