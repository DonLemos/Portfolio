//DUMMIES CHAPTER 17
//
// for (let counter = 0; counter < 500; counter++) {
//     console.log(counter + ": Hello, Javascript!");
// }
// //
// for (let i = 10; i > 0; i--) {
//     alert (i);
//     }
//     alert ("Blast Off!");
// //
// let myFriends = ["Agatha", "Agnes", "Jermaine", "Jack"];
// for (let i = 0; i < myFriends.length; i++) {
//     alert(myFriends[i] + " is my friend.");
// }
// //
// //Geting a random number
// alert(Math.random() * 11);
// alert(Math.floor(Math.random() * 11));
// alert(Math.floor(Math.random() * (1000 - 100) + 100));
// let randomFriend = Math.floor(Math.random() * myFriends.length);
// alert(myFriends[randomFriend]);
//
//Random Weather App
//
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let weather = ["Sunny", "Cloudy", "Partly Cloudy", "Partly Sunny", "Raining", "Snowing", "Thunderstorms", "Foggy"];
minTemp = 0;
maxTemp = 45;
//
function generateWeather() {
    for (let i = 0; i < days.length; i++) {
        let weatherToday = weather[Math.floor(Math.random() * weather.length)];
        let tempToday = Math.floor(Math.random() * (minTemp - maxTemp) + minTemp);
        document.getElementById("5DayWeather").innerHTML += "<div id='" + days[i] + "' class='" + weatherToday + 
        "' ><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees.</div>";
    }
}
generateWeather();