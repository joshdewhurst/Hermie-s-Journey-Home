const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])

let health = 200
let gameFrame = 0

// Create a Class for game pieces 

class GamePiece {
    constructor(x, y, width, height, color) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.alive = true
    this.score = 200
    }

render () {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
}

}

const hermie = new GamePiece(10, 10, 50, 50, "pink")
const crab = new GamePiece(500, 250, 80, 80, "red")
const sandcastle = new GamePiece(this.x, this.y, 60, 60, 'brown')
const shell = new GamePiece(this.x, this.y, 100, 100, 'blue')

function movePlayer (e) {
    const speed = 15
    if (hermie.alive) {
        switch(e.key) {
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
    }
    hermie.render()
}

document.addEventListener('keydown', movePlayer)

// creating crabs

const crabArray = []
class Crab {
    constructor() {
        this.y = Math.random() * canvas.height;
        this.x = canvas.width - 100;
        this.radius = 20
        this.speed = Math.random() * 3 + 1;
        this.distance
    }
    update () {
        this.x -= this.speed
    }
    draw () {
        ctx.fillStyle = 'red'
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill();
        ctx.closePath();
        ctx.stroke();
    }
}

function addCrab () {
    if (gameFrame % 400 === 0) {
        crabArray.push(new Crab());
        console.log(crabArray.length)
    }
    for (i=0; i < crabArray.length; i++) {
        crabArray[i].update()
        crabArray[i].draw()
    }
}

// creating SandCastles

const sandArray = []
class SandCastle {
    constructor() {
        this.y = Math.random() * canvas.height;
        this.x = canvas.width - 100;
        this.radius = 40
        this.speed = Math.random() * 1 + 1;
        this.distance
    }
    update () {
        this.x -= this.speed
    }
    draw () {
        ctx.fillStyle = 'yellow'
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill();
        ctx.closePath();
        ctx.stroke();
    }
}

function addSand () {
    if (gameFrame % 300 === 0) {
        sandArray.push(new SandCastle());
        console.log(sandArray.length)
    }
    for (i=0; i < sandArray.length; i++) {
        sandArray[i].update()
        sandArray[i].draw()
    }
}

// detect hit function


function runGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    addCrab();
    addSand();
    if (hermie.alive) {
        hermie.render()
    };
    gameFrame++;
    requestAnimationFrame(runGame)
}

runGame()