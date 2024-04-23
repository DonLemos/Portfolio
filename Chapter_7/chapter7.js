//DUMMIES CHAPTER 7
//
//Animating the web
//Changing elements
//
document.getElementById("lefteye").style.backgroundColor = "purple";
document.getElementById("head").style.transform = "rotate(15deg)";
//
//Experimenting
//Put a 2 pixel wide, solid black border around his body
document.getElementById("body").style.border = "2px black solid";
//Round the corner of his mouth
document.getElementById("mouth").style.borderRadius = "4px";
//Put yellow dots around his eye
document.getElementById("righteye").style.border = "4px yellow dotted";
//Change the left arm colour
document.getElementById("leftarm").style.backgroundColor = "#ff00ff";
//Change the text colour
document.getElementById("body").style.color = "#ff0000";
//Adding hair
document.getElementById("head").style.borderTop = "5px black solid";
//
//Figuring out changes
//Tilting head to the other side
document.getElementById("head").style.transform = "rotate(-15deg)";
document.getElementById("nose").style.borderRadius = "50%";
document.getElementById("rightarm").style.backgroundColor = "green";
document.getElementById("mouth").style.backgroundColor = "pink";
//
//Making the robot dance
//
let rightEye = document.getElementById("righteye");
//
rightEye.addEventListener("click", moveUpDown);
//
let leftEye = document.getElementById("lefteye");
//
leftEye.addEventListener("click", moveUpDown);
//
let leftArm = document.getElementById("leftarm");
//
leftArm.addEventListener("click", moveRightLeft);
//
let mouth = document.getElementById("mouth");
//
mouth.addEventListener("click", moveLeftRight);


function moveUpDown(e) {
//This uses the event object (from event listener) to find out what part of the robot was clicked on.
//It stores info about that element, in this case the "righteye" in a new variable called "robotPart"
let robotPart = e.target;
//This statement creates a new variable called "top" and gives it a vlue of 0
//The "top" variable is what we use to position the eye in each frame of the animation
let top = 0;
//"setInterval" command will run the function listed first in the parentheses and will do it on a schedule determined by the number in the parenthases
//The number is a number of milliseconds and will wait before doing it again
//The larger the number the slower the animation and vice versa
let id = setInterval(frame, 10)
//Here we are creating a new function that is run by "setInterval". We set the top value of our "top" variable and add "%" at the end of the element that was clicked
//When you first click on the eye, top will be 0 percent which put the eye at the top of the robots head
//Then the "top++" increases the value of top by 1 using the increment operator
function frame() {
robotPart.style.top = top + '%';
top++
//Here we check whether the final frame of the animation has been reached by seeing if top is equal to 20
//If top is equal to 20, the next command is run
if (top === 20) {
//The "clearInterval" statement ends the animation
clearInterval(id);
  }
 }
}
function moveLeftRight (e) {
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
    