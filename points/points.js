var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//position circle
var x = canvas.width / 2;
var y = canvas.height / 2;
// for move
var dir_x = 2
var dir_y = -2
//for collisions with walls
var circle_radius = 10;
// for paddle
var paddle_height = 20;
var paddle_width = 100;
var paddle_x = (canvas.width - paddle_width) / 2
var pandle_y = canvas.height - paddle_height;
// events left right
var right_press = false;
var left_press = false;
//-----------------------------------------------------------
//brick
var brick = [];
var brick_row_count = 3;
var brick_column_count = 5;
var brick_width = 70;
var brick_height = 20;
var brick_padding = 10;
var brick_offset_top = 30;
var brick_offset_left = 25;
//total score
var score = 0;
//lives player
var lives = 3;
//-----------------------------------------------------
//function draw circle
function draw_circle() {
    ctx.beginPath();
    ctx.arc(x, y, circle_radius, 0, Math.PI * 2, false);
    ctx.fillStyle = "#900c3f";
    ctx.fill();
    ctx.closePath();
}

//draw paddle
function draw_paddle() {
    ctx.beginPath();
    ctx.rect(paddle_x, pandle_y, paddle_width, paddle_height);
    ctx.fillStyle = "#880a3b";
    ctx.fill();
    ctx.closePath();
}

//brick
for (var i = 0; i < brick_column_count; i++) {
    brick[i] = [];
    for (var j = 0; j < brick_row_count; j++) {
        brick[i][j] = {x: 0, y: 0, status: 1};
    }
}

function draw_brick() {
    for (var i = 0; i < brick_column_count; i++) {
        for (var j = 0; j < brick_row_count; j++) {
            if (brick[i][j].status == 1) {
                var brick_x = (i * (brick_width + brick_padding)) + brick_offset_left;
                var brick_y = (j * (brick_height + brick_padding)) + brick_offset_top;
                brick[i][j].x = brick_x;
                brick[i][j].y = brick_y;
                ctx.beginPath();
                ctx.rect(brick_x, brick_y, brick_width, brick_height);
                ctx.fillStyle = "#dbf6a1";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

//collision with brick
function collision_brick() {
    for (var i = 0; i < brick_column_count; i++) {
        for (var j = 0; j < brick_row_count; j++) {
            var collision_brick = brick[i][j];
            //ball x,y and brick x,y
            if (collision_brick.status == 1) {
                if (x > collision_brick.x && x < collision_brick.x + brick_width && y > collision_brick.y && y < collision_brick.y + paddle_height) {
                    dir_y = -dir_y;
                    collision_brick.status = 0;
                    score++;
                    if (score == (brick_row_count * brick_column_count)) {
                        alert('Congratulation!You are win!!!:)');
                        document.location.reload();
                        // make next level
                    }
                }
            }
        }
    }
}

//-------
function draw_score() {
    ctx.font = "bolder 1em Verdana";
    ctx.fillStyle = "#ff8d1a";
    ctx.fillText("Score: " + score, 8, 20);
}

function draw_lives() {
    ctx.font = "bolder 1em Verdana";
    ctx.fillStyle = "#ff8d1a";
    ctx.fillText("Lives: " + lives, canvas.width - 75, 20);
}

//----------
//events
document.addEventListener('keydown', keydown_hadler, false);
document.addEventListener('keyup', keyup_hadler, false);

function keydown_hadler(event) {
    //right
    if (event.keyCode == 39) {
        right_press = true;
    }
    //left
    else if (event.keyCode == 37) {
        left_press = true;
    }
}

function keyup_hadler(event) {
    //right
    if (event.keyCode == 39) {
        right_press = false;
    }
    //left
    else if (event.keyCode == 37) {
        left_press = false;
    }
}

function draw() {
//clear canvas for move ball
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //circle
    draw_circle();
    draw_paddle();
    draw_brick();
    draw_score();
    collision_brick();
    draw_lives();
    x += dir_x;
    y += dir_y;
    //top/bottom border canvas collis
    //canvas.height - circle_radius
    //calculating the collision point of the wall without center of the circle
    if (y + dir_y < circle_radius) {
        dir_y = -dir_y;
    }

    else if (y + dir_y > canvas.height - circle_radius) {
        if (x > paddle_x && x < paddle_x + paddle_width) {
            dir_y = -dir_y;

        }
        else {
            lives--;
            if (!lives) {
                alert('game over');
                document.location.reload();
            }
            else {
                x = canvas.width / 2;
                y = canvas.height - 50;
                dir_x = 3;
                dir_y = -3;
                paddle_x = (canvas.width - paddle_width) / 2
            }
        }
    }

    //left/right canvas border
    if (x + dir_x > canvas.width - circle_radius || x + dir_x < circle_radius) {
        dir_x = -dir_x;
    }
//move paddle
    if (right_press && paddle_x < canvas.width - paddle_width) {
        paddle_x += 7;
    } else if (left_press && paddle_x > 0) {
        paddle_x -= 7;
    }
}

//window.requestAnimationFrame(draw);
//update circle every 10 ms
setInterval(draw, 10)
