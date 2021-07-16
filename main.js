img = "";
status = "";
object =[];

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload() {
    img = loadImage('background.jpg');
}



function modelLoaded() {
    console.log("Model Loaded");
    status = true;

}

function gotResult(error,results) {
    console.log("test message");
    if (error) {
        console.log(error);
    }
    console.log(results);
    object = results;
}

function home() {
    window.location = "index.html";
}

function home2() {
    window.location = "index.html";
}

function bedroom() {
    window.location = "bedroom.html";
}

function tv() {
    window.location = "tv.html";
}