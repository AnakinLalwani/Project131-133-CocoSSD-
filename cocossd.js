objects = [];
status = "";
function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
