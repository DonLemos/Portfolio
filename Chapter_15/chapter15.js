//DUMMIES CHAPTER 15
//
// switch (expression) {
//     case value1:
//         //execute statements
//         break;
//         case value2:
//             //execute statements
//             break;
//             default:
//                 //execute statements
//                 break;
// }

// let myNumber = prompt("Enter your favourite day of the week!");
// let theResponse;
// //
// switch (myNumber) {
//     case "Monday":
//         theResponse = "Ack!";
//         break;
//         case "Tuesday":
//             theResponse = "Taco Day!";
//             break;
//             case "Wednesday":
//                 theResponse ="Halfway there!";
//                 break;
//                 case "Thursday":
//                     theResponse = "It's a new Friday!";
//                     break;
//                     case "Friday":
//                         theResponse = "TGIF! Yeah!";
//                         case "Saturday":
//                             theResponse = "What a day!";
//                             case "Sunday":
//                                 theResponse = "Sunday = Funday!";
//                                 break;
//                                 default:
//                                     theResponse = "I haven't heard of that one!"
// }
// alert (theResponse);
// let myDate = new Date();
// console.log(myDate);
// //
// console.log(myDate.getDay());
// console.log(myDate.getDate());
// console.log(myDate.getMonth());
// let myNewDate = new Date();
// console.log(myNewDate);
// console.log(myNewDate.setMonth(7));
//


//ACTIVITY CALLENDER PROGRAM
//
let todayDate = document.getElementById("todaysdate");
let todoButton = document.getElementById("whattodo");
//
//Add a listener to the "whattodo" button
//
todoButton.addEventListener("click", displayActivity);
//
//Create a new Date object
let d = new Date();
//
//Call the displayDate() function
displayDate();
//
function displayDate() {
    //todo: display the current date in the "todaysdate" div
    todayDate.innerHTML = d.toDateString();
}
function displayActivity() {
    //todo: find out day of the week
    let dayOfWeek = d.getDay();
    //todo: set a variable, called "youShould", with a different string based on what day of the week it is.
    let youShould;
    switch (dayOfWeek) {
        case 0:
            youShould = "Take it easy, you've earned it!";
            break;
        case 1:
            youShould = "Get up and go to work!";
            break;
        case 2:
            youShould = "Feel better, it's one day closer to Friday!";
            break;
        case 3:
            youShould = "Get excited, we are half way there!"
            break;
        case 4:
            youShould = "Go out for dinner after work!"
            break;
        case 5:
            youShould = "Go out with friends!";
            break;
        case 6:
            youShould = "Its Friyay!"
            case 7:
                youShould = "Do something fun today!"
                break;
        default:
            youShould = "Hmmm, something is broken!"
            break;
    }
    //Output the value of "youShould" into the "thingToDo" div
    document.getElementById("thingToDo").innerHTML = youShould
}