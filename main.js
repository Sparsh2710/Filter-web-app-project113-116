function preload() {

}

function setup() {
    Canvas = createCanvas(300, 300);
    Canvas.center();
    Video =createCapture(VIDEO);
    Video.size(300, 300);
    Video.hide();
    poseNet = ml5.poseNet(Video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Posenet is Initialized');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("nose X = " + results[0].pose.nose.x);
        console.log("nose Y = " + results[0].pose.nose.y);
    }
}

function draw() {
    image(img, 0, 0, 300, 300);
}

function take_snapshot() {
    save('FilterImage.jpg')
}
