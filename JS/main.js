const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])

let health = 200
let gameFrame = 0
let gameOver = true


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

const hermie = new GamePiece(10, 10, 20, 20, "pink")
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
        this
    }
    update () {
        this.x -= this.speed
        // distance between x/y values in hermie/crab
        const dx = this.x - hermie.x;
        const dy = this.y - hermie.y;
        // defining this.distance as the difference between them(Pathagorean Theorum)
        this.distance = Math.sqrt(dx*dx + dy*dy)

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
    }
    for (i=0; i < crabArray.length; i++) {
        crabArray[i].update()
        crabArray[i].draw()
    }

    for (let i = 0; i < crabArray.length; i++) {
        if (crabArray[i].distance < crabArray[i].radius + 5 && hermie.score > 0 && hermie.score <= 200) {
            hermie.alive = false
            ctx.font = "30px Arial";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.fillText("Hermie Died!!!! Poor baby Hermie...", canvas.width / 2, 50);
            document.getElementById('title').innerText = "You lost, try again!";
            let btn = document.createElement("button");
            btn.innerHTML = "Play Again!";
            document.body.appendChild(btn);
            btn.addEventListener('click', () => {
            location.reload()
            } )
            GameOver ()
        }
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
        const dx = this.x - hermie.x;
        const dy = this.y - hermie.y;
        this.distance = Math.sqrt(dx*dx + dy*dy)
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
    }
    for (i=0; i < sandArray.length; i++) {
        sandArray[i].update()
        sandArray[i].draw()
    }
    for (let i = 0; i < sandArray.length; i++) {
        if (sandArray[i].distance < sandArray[i].radius + 5) {
            hermie.alive = false
            ctx.font = "30px Arial";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.fillText("Hermie Died!!!! Poor baby Hermie...", canvas.width / 2, 50);
            document.getElementById('title').innerText = "You lost, try again!";
            let btn = document.createElement("button");
            btn.innerHTML = "Play Again!";
            document.body.appendChild(btn);
            btn.addEventListener('click', () => {
            location.reload()
            } )
            GameOver ()
        }
    }
}

// Create shell/end game
const shellArray = []
class Shell {
    constructor() {
        this.y = Math.random() * canvas.height;
        this.x = canvas.width - 100;
        this.radius = 80
        this.speed = Math.random() * 1 + 1;
        this.distance
    }
    update () {
        this.x -= this.speed
        const dx = this.x - hermie.x;
        const dy = this.y - hermie.y;
        this.distance = Math.sqrt(dx*dx + dy*dy)
    }
    draw () {
        ctx.fillStyle = 'blue'
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill();
        ctx.closePath();
        ctx.stroke();
    }
}

function addShell () {
    if (gameFrame % 500 === 0) {
        shellArray.push(new Shell());
    }
    for (i=0; i < shellArray.length; i++) {
        shellArray[i].update()
        shellArray[i].draw()
    }

    for (let i = 0; i < shellArray.length; i++) {
        if (shellArray[i].distance < shellArray[i].radius + 5) {
            hermie.alive = false
            ctx.font = "30px Arial";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.fillText("Hermie Died!!!! Poor baby Hermie...", canvas.width / 2, 50);
            document.getElementById('title').innerText = "You lost, try again!";
            let btn = document.createElement("button");
            btn.innerHTML = "Play Again!";
            document.body.appendChild(btn);
            btn.addEventListener('click', () => {
            location.reload()
            } )
            GameOver ()
        }
    }
}

// GAME OVER

function GameOver() {
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);
        gameOver = false
}


// run clock
let time = 0
function runTimer () {
    time ++
    document.getElementById('timer').innerText = time
    }



// run game
function runGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    addCrab()
    addSand()
    addShell()
    if (hermie.alive) {
        hermie.render()
    }
    gameFrame++;
    if (gameFrame >5500) {
        gameOver = false
        document.getElementById('title').innerText = "Winner!!!"
        // making a replay button
        let btn = document.createElement("button");
        btn.innerHTML = "Play Again!";
        document.body.appendChild(btn);
        btn.addEventListener('click', () => {
            location.reload()
        })
    }
    if (gameOver) {
         requestAnimationFrame(runGame);
    }
}

// Creating a start button
window.onload = function () {
    let btn = document.createElement("button");
    btn.innerHTML = "Start!";
    document.body.appendChild(btn);
    btn.addEventListener('click', () => {
        runGame()
        setInterval(runTimer, 1000)
    })
}