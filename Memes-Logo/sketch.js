function setup() {
    createCanvas(1000, 1000);
}

var lion; // global

function preload() {
    lion = loadImage("Lion.jpg")
}

function draw() {
    background(0);
    
    image(lion,100, 100)
    
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(100);
    textFont("Comic Sans MS");
    text("Yurr you talking shit", width/2, 750);
}