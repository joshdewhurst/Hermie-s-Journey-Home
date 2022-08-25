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

function movePlayer (e) {
    console.log(e)
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
    console.log(hermie)
}

document.addEventListener('keydown', movePlayer)


// making a clock timer
function timer () {
    if (gameFrame < 500) {
        gameFrame ++
        document.getElementById("timer").innerText = gameFrame
    
        if (document.getElementById("timer").innerText % 5 === 0) {
            let xValue = 550
            let randomY= Math.floor(Math.random() * 250)
            const crab = new GamePiece(xValue, randomY, 60, 60, 'red')
            crab.render()
        }
        if (document.getElementById("timer").innerText % 7 === 0) {
            let xValue = 550
            let randomY= Math.floor(Math.random() * 250)
            const sandcastle = new GamePiece(xValue, randomY, 60, 60, 'brown')
            sandcastle.render()
        }
    } 
}

setInterval(timer, 1000)

// making enemies appear on timed intervals

function runGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (hermie.alive) {
        hermie.render()
    };
}

runGame()