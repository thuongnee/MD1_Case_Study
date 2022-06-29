let ball = new Ball(150, 250, 10, "white");
ball.draw()
let bar = new Bar(300, 550, 130, 20, "red");
bar.draw()
let gameOver = true;
let score = 0;
window.addEventListener('keydown', function (event) {

    switch (event.key) {
        case "ArrowLeft":
            bar.img = document.getElementById("img")

            bar.moveLeft();

            break;
        case "ArrowRight":
            bar.img = document.getElementById("img")
            bar.moveRight();
            break;
    }
})


let bricks = [];

function createBrick() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 7; j++) {
            let br1 = new Brick(25 + j * (25 + 70), 25 + i * (25 + 25), 70, 25);
            bricks.push(br1)
        }
    }
}

function showListBrick() {
    bricks.forEach(
        (br1) => {
            if (br1.status == true) {
                br1.draw();
            }
        }
    )
}


function collisionBallAndBrick(ball) {
    bricks.forEach((br1) => {
        if (br1.status) {

            if (
                (ball.y - ball.r <= (br1.y + br1.height))
                && ball.x <= br1.x + br1.width
                && ball.x >= br1.x
                // ||ball.x+ball.r>=br1.x
                // ||ball.x-ball.r<= br1.x+br1.width

            ) {
                br1.status = false;
                score++;
                if (score == bricks.length) {
                    gameOver = false;
                    document.getElementById("win").style.display = "block"

                }
                document.getElementById("score").innerHTML = "SCORE: " + `${score}`
                ball.speedY = -ball.speedY;
            }
        }
    })
}


let paper = document.getElementById("canvas1")
let pen = paper.getContext("2d")

function clearCanvas() {
    pen.clearRect(0, 0, paper.width, paper.height)
}


//click start

function start() {
    document.getElementById("start").style.display = "none";
    document.getElementById("canvas1").style.display = "block";
    document.getElementById("score").style.display = "block";
    ball.x = 150;
    ball.y = 250;
    bar.x = 300;
    bar.y = 550;
    score = 0;
    document.getElementById("score").innerHTML = "SCORE: " + `${score}`
    createBrick();

    Play();
}

function Play() {



    audio_nen.play();


    function playGame() {
        clearCanvas();

        bar.draw();

        ball.update_xy();
        ball.check_va_cham(bar);
        ball.draw();

        collisionBallAndBrick(ball);
        showListBrick();
        if (gameOver) {
            requestAnimationFrame(playGame)
        }
    }

    playGame();

}


let audio_nen = new Audio('audio/nhacnen1.mp3');
let au_thua=new Audio("audio/NhacThua.mp3")


//click gameOver
function gameOverr() {
    gameOver = true;

    document.getElementById("over").style.display = "none";
    document.getElementById("score").style.display = "none"
    document.getElementById("start").style.display = "block";
    document.getElementById("canvas1").style.display = "none";

}


// //click youWin
function win() {
    gameOver = true;
    document.getElementById("win").style.display = "none";
    document.getElementById("score").style.display = "none"
    document.getElementById("start").style.display = "block";
    document.getElementById("canvas1").style.display = "none";
}


