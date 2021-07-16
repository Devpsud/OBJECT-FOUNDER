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
    img = loadImage('bed.jpg');
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

function draw() {
    image(img, 0, 0, 380, 380);
    if (status != "") {
        for (let i = 0; i < object.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";

        fill("#FF0000");
        percent = floor(objects[i].comfidencex*100);
        text(objects[i].label+""+percent+"%",objects[i].x, objects[i].y);
        nofill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i]   .height);
        }
    } 
    }

    function home() {
        window.location = "index.html";
    }