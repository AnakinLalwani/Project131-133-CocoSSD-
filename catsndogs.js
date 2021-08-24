var img = "";
var objects = [];
var status = "";
function preload() {
    img = loadImage("catsndogs.jpg");
}
function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();
}
function modelLoaded() {
    console.log("Model Loaded");
    status = "true";
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        objects = results;
    }
}
function draw() {
    var r = random(255);
    var g = random(255);
    var b = random(255);
    image(img, 0, 0, 500, 400);
    objectDetector.detect(img, gotResults);
    if(status != "") {
        for (i=0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Object Detected"
            fill(r, g, b);
            percent = floor(objects[i].confidence * 100)
            text(objects[i].label + " " + percent + " %", objects[i].x+15, objects[i].y+15); 
            noFill();
            stroke(r, g, b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}