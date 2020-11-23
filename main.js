noseX = 0;
noseY = 0;

function preload() {
    loadMoustache = loadImage('https://i.postimg.cc/0N7D9tW1/8-2-moustache-png-clipart.png');
}

function setup() {
    Canvas = createCanvas(300, 300);
    Canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 15;
        noseY = results[0].pose.nose.y - 15;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(loadMoustache, noseX, noseY, 40, 30);
}

function take_snapshot() {
    save('FilterImage.jpg')
}
