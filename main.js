var canvas = document.getElementById('gamezone');
var context = canvas.getContext('2d');
var scoreshow = document.getElementById('score');

var birdimg = new Image();
var hinhnenchinh = new Image();
var ongtren = new Image();
var ongduoi = new Image();
birdimg.src = "images/bird.png";
hinhnenchinh.src = "images/nenchinh.png";
ongtren.src = "images/ongtren.png";
ongduoi.src = "images/ongduoi.png";

var Introimg = document.getElementById('intro')
var khoangcachhaiong = 140;
var score = 0;
var khoangcachdenongduoi; 
var bird = {
    x: hinhnenchinh.width / 5,
    y: hinhnenchinh.height / 2
}
var ong = [];
ong[0] = {
    x: canvas.width,
    y: 0
}

function run() {
    context.drawImage(hinhnenchinh, 0, 0);
    context.drawImage(birdimg, bird.x, bird.y);

    for (var i = 0; i < ong.length; i++) {
        khoangcachdenongduoi = ongtren.height + khoangcachhaiong;
        context.drawImage(ongtren, ong[i].x, ong[i].y);
        context.drawImage(ongduoi, ong[i].x, ong[i].y + khoangcachdenongduoi);
        ong[i].x -= 3; 
        if (ong[i].x == canvas.width / 2) {
            ong.push({
                x: canvas.width,
                y: Math.floor(Math.random() * ongtren.height) - ongtren.height
            })
        }

        if (ong[i].x == 0) {
            ong.splice(0, 1);
        }     
        if (ong[i].x == bird.x) {
            score++;
        }
        if (bird.y + birdimg.height == canvas.height ||
            bird.x + birdimg.width >= ong[i].x && bird.x <= ong[i].x + ongtren.width
            && (bird.y <= ong[i].y + ongtren.height ||
                bird.y + birdimg.height >= ong[i].y + khoangcachdenongduoi)) {
            alert("Điểm số của bạn: " + score);
            return;
        }
    }
    scoreshow.innerHTML = "score: " + score;
    bird.y += 3;
    requestAnimationFrame(run);
}
document.addEventListener("keydown", function () {
    bird.y -= 50;
})
function start() {
    Introimg.style.display = "none";
    score = 0;
    khoangcachdenongduoi;
    bird.x = hinhnenchinh.width / 5,
    bird.y = hinhnenchinh.height / 2

    ong = [];
    ong[0] = {
        x: canvas.width,
        y: 0 
    }

    run();
}