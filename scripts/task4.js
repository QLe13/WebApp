//get the canvas element
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

const gravity = 0.5;
let score = 0;

//bird object
const bird = {
    x: 50,
    y: canvas.height / 2,
    velocity: 0,
    radius: 10,
    draw: function () {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = "black";
        context.fill();
        context.closePath();
    },
    flap: function () {
        this.velocity = -5 ;
    },
    update: function () {
        this.velocity += gravity;
        this.y += this.velocity;
        if (this.y + this.radius >= canvas.height) {
            this.y = canvas.height - this.radius;
            gameOver();
            window.location.reload();
        }
        if (this.y - this.radius <= 0) {
            this.y = this.radius;
            gameOver();
            window.location.reload();
        }

    }
};

//pipes object
const pipes = {
    position: [],
    gap: 150,
    width: 40,
    maxYPos: -150,
    draw: function () {
        for (let i = 0; i < this.position.length; i++) {
            const pipe = this.position[i];
            const x = pipe.x;
            const topPipeYPos = pipe.y;
            const bottomPipeYPos = pipe.y +  this.gap + this.width + 50  ;

            //draw top pipe
            context.beginPath();
            context.rect(x, topPipeYPos, this.width, this.gap);
            context.fillStyle = "green";
            context.fill();
            context.closePath();

            //draw bottom pipe
            context.beginPath();
            context.rect(x, bottomPipeYPos, this.width, canvas.height - bottomPipeYPos);
            context.fillStyle = "green";
            context.fill();
            context.closePath();

            //dheck collision
            if (
                bird.x + bird.radius > x &&
                bird.x - bird.radius < x + this.width &&
                (bird.y - bird.radius < topPipeYPos ||
                    bird.y + bird.radius > bottomPipeYPos)
            ) {
                gameOver();
                window.location.reload();
            }
            //update score
            if (bird.x === x + this.width) {
                score++;
            }
        }
    },
    update: function () {
        if (frame % 100 === 0) {
            this.position.push({
                x: canvas.width,
                y: Math.floor(Math.random() * (this.maxYPos - 20 + 1) + 20)
            });
        }
        for (let i = 0; i < this.position.length; i++) {
            const pipe = this.position[i];
            pipe.x -= 2;
            if (pipe.x + this.width <= 0) {
                this.position.shift();
            }
        }
    }
};

document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        bird.flap();
    }
});

//game loop
let frame = 0;

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    bird.update();
    bird.draw();
    pipes.update();
    pipes.draw();
    context.fillStyle = "#000";
    context.font = "20px Times New Roman";
    context.fillText("Score: " + score, 10, 20);
    frame++;
    requestAnimationFrame(gameLoop);
}
gameLoop();

//game over function
function gameOver() {
    context.fillStyle = "#000";
    context.font = "30px Arial";
    context.fillText("Game Over", canvas.width / 2 - 80, canvas.height / 2);
    context.fillText("Score: " + score, canvas.width / 2 - 50, canvas.height / 2 + 40);

}