var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var images = ["G1.jpg", "G2.jpg", "G3.jpg", "G4.jpg", "G5.jpg", "G6.jpg"];

var currentFrame = 0;
var maxFrames = images.length;
var fps = 30;
var interval = 1000 / fps;

function drawFrame() {
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the current frame
    var img = new Image();
    img.onload = function () {
        context.drawImage(img, 0, 0);
    };
    img.src = images[currentFrame];

    // Update the frame count
    currentFrame++;
    if (currentFrame >= maxFrames) {
        currentFrame = 0;
    }
}

setInterval(drawFrame, 2000);