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

const playerIcon = new Image()
playerIcon.src="./images/Hermie.png"


class GamePiece {
    constructor(x, y, width, height, image) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.alive = true
    }

    render () { 
        debugger;
    ctx.drawImage(playerIcon, 10, 10, 50, 50)
    }
}


    // movePiece() {
    //     const dx = this.x - mouse.x;
    //     const dy = this.y - mouse.y;
    //     if (thix.x != mouse.x) {
    //         this.x -= dx/45;
    //     }
    //     if (this.y != mouse.y) {
    //         this.y -= dy/45;
    //     }
    // }

// }

const hermie = new GamePiece(10, 10, 50, 50)
hermie.render()

// function runGame () {
//     hermie.movePiece ();
//     requestIdleCallback(runGame);
//     gameFrame ++;
// }


console.log("I am working")