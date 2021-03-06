function setup() {
    canvas =  createCanvas(640,480);
    canvas.position(150,150);
    video = createCapture(VIDEO);
    video.hide();
    
}

function draw() {
    image(video,230,150,220,200);

    fill(252, 82, 3);
    stroke(252, 82, 3);
    circle(50,50,80);
     

    fill(252, 82, 3);
    stroke(252, 82, 3);
    circle(580,420,80);

    fill(252, 194, 3);
    stroke(252, 194, 3);
    rect(90,40,460,20);

    rect(91,420,460,20);
}

function take_snapshot() {
    save("frame.png")
}