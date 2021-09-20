

function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(160,110);
  
   canvas = createCanvas(425,425);
   canvas.position(760,126);

   posenet = ml5.poseNet(video,modelLoaded);
   posenet.on('pose',gotPoses);
}
function draw(){
    background('ff0000');
}
function modelLoaded(){
    console.log("Posenet Is Ready!");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}