//CHAPTER 6
//Douglas The Robot


let rightEye = document.getElementById("righteye");
let leftEye = document.getElementById("lefteye");
let leftArm = document.getElementById("leftarm");
let mouth = document.getElementById("mouth");


rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);
mouth.addEventListener("click", moveLeftRight);


//Changing elements of the robot using Javascript
//
//Changing left eye colour
document.getElementById("lefteye").style.backgroundColor = "purple";
//
//Changing head angle
document.getElementById("head").style.transform = "rotate(15deg)";
//
//Changing body and giving a border
document.getElementById("body").style.border = "2px black solid";
//
//Changing border on his mouth
document.getElementById("mouth").style.borderRadius = "4px";
//
//Changing the look of his right eye giving it a dotted border
document.getElementById("righteye").style.border = "4px yellow dotted";
//
//Changing his left arm colour
document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
//
//Changing his body colour
document.getElementById("body").style.color = "#FF0000";


//Adding my touches to the robot
//
document.getElementById("head").style.borderTop = "5px black solid";
document.getElementById("head").style.transform = "rotate(-15deg)";
document.getElementById("nose").style.borderRadius = "10px";
document.getElementById("rightarm").style.backgroundColor = "green";
document.getElementById("mouth").style.backgroundColor = "pink";


//Creating functions with info for the event listeners
//
function moveUpDown(e) {
let robotPart = e.target;
let top = 0;
let id = setInterval(frame, 10) // draw every 10ms

function frame() {
robotPart.style.top = top + '%';
top++;
if (top === 20) {
clearInterval(id);
  }
 }
}

function moveRightLeft(e) {
let robotPart = e.target;
let left = 0;
let id = setInterval(frame, 10) // draw every 10ms

function frame() {
robotPart.style.left = left + '%';
left++;
if (left === 70) {
clearInterval(id);
  }
 }
}

function moveRightLeft (e) {
let robotPart = e.target;
let left = 0;
let id = setInterval(frame, 10) // draw every 10ms

function frame() {
robotPart.style.left = left + '%';
left++;
if (left === 70) {
clearInterval(id);
  }
 }
}

function moveLeftRight (e) {
let robotPart = e.target;
let left = 0;
let id = setInterval(frame, 10) // draw every 10ms
  
function frame() {
robotPart.style.left = left + '%';
left++;
if (left === 20) {
clearInterval(id);
  }
 }
}
