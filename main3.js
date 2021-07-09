rightWristY = 0;
rightWristX = 0;
leftWristY = 0;
leftWristX = 0;
Score = 0;
game_status = "";
function setup() {
canvas = createCanvas(300, 300);
canvas.parent('canvas');
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', getResult);
}
function startGame() {
game_status = "start";
document.getElementById("status").innerHTML = "Game Is Loaded!";
}
function draw() {
if(game_status == "start") {
image(video, 0, 0, 300, 300);
if(Score > 0.2) {
fill("red");
stroke("black");
circle(rightWristX, rightWristY, 20);
circle(rightWristX, rightWristY, 20);
}
}
}
function modelLoaded() {
console.log("Posenet is initialized");
}
function getResult(results) {
if(results.length > 0) {
rightWristY = results[0].pose.rightWrist.y;
leftWristY = results[0].pose.leftWrist.y;
rightWristX = results[0].pose.rightWrist.x;
leftWristX = results[0].pose.leftWrist.x;
Score = results[0].pose.keypoints[10].score;
console.log("rightWristX = " + rightWristX + ", rightWristY = " + rightWristY + ", leftWristX = " + leftWristX + ", leftWristY = " + leftWristY + ", Score = " + Score);
}
}