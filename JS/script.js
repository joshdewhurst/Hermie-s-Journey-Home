const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])

let health = 200
let gameFrame = 0

class GamePiece {
    constructor(x, y, width, height, playerIcon) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.alive = true
        this.playerIcon = playerIcon
        this.score = 200
    }
        // creating a function to produce a new image when given a src as a parameter
Render = () => {
            const gameImage = new Image();
            gameImage.src = this.playerIcon
            gameImage.onload = () => {
            ctx.drawImage(gameImage, this.x, this.y, this.width, this.height)
        }
 }
        }


const hermie = new GamePiece(10, 10, 50, 50, './images/Hermie.png')
const crab = new GamePiece(this.x, this.yy, 60, 60, './images/Crab.png')
const sandcastle = new GamePiece(this.x, this.y, 60, 60, './images/sandcastle.jpeg')
const shell = new GamePiece(this.x, this.y, 50, 50, './images/Shell.jpg')



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
        hermie.Render()
    }
            }

document.addEventListener('keydown', movePlayer)

// having a running clock that shows how much time has passed

function gamePlay () {
    let clock = document.getElementById("timer").innerText
    gameFrame ++
    clock = gameFrame
    console.log(clock)
    
    if (gameFrame % 10 ===0) {
        let xValue = 550
        let randomY= Math.floor(Math.random() * 250)
        const crab = new GamePiece(xValue, randomY, 60, 60, './images/Crab.png')
        crab.Render()
       detectHit(hermie, crab)
    } 
    if (gameFrame % 7 === 0) {
        let xValue = 550
        let randomY= Math.floor(Math.random() * 250)
        const sandcastle = new GamePiece(xValue, randomY, 60, 60, './images/sandcastle.jpeg')
        sandcastle.Render()
        detectHit(hermie, sandcastle)
    }
    if (gameFrame % 180 === 0) {
        let xValue = 275
        let yValue = 130
        const shell = new GamePiece(xValue, yValue, 50, 50, './images/Shell.jpg')
        shell.Render()
        detectHit(hermie, shell)
    }

// making a collision calculator
function detectHit(objectOne, objectTwo) {
    const left = objectOne.x + objectOne.width >= objectTwo.x
    const right = objectOne.x <= objectTwo.x + objectTwo.width
    const top = objectOne.y + objectOne.height >= objectTwo.y
    const bottom = objectOne.y <= objectTwo.y + objectTwo.height
    if (left && right && top && bottom) {
        console.log("boom")
    } 
 
console.log(crab)

}


}




console.log("I am working")

function runGame () {
    gamePlay()
    setInterval(gamePlay, 1000)
    if (hermie.alive) {
        hermie.Render()
    }
}

runGame ()