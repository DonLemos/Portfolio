//LEMONADE STAND
//
//Set days of the week array
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",];
//Set weather types
let weather = ["Sunny", "Cloudy", "Partly Cloudy", "Partly Sunny", "Raining", "Snowing", "Thunderstorms", "Foggy"];
//Setting min and max temp
let maxTemp = 100;
let minTemp = 0;
//Setting cost of lemonade to me
let lemonadeCost = 0.5;
//Creating an array to store daily temperature
let dailyTemp = [];
//Make the weeks weather
generateWeather();
/*Generates weather for the week*/
function generateWeather () {
let weatherToday;
let tempToday;
for (let i = 0; i < days.length; i++) 
{
weatherToday = weather[Math.floor(Math.random() * weather.length)];
tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
dailyTemp[i] = tempToday;

document.getElementById("5DayWeather").innerHTML
+= "<div id='" + days[i] + "' class='" +
weatherToday + "'><b>Forecast for " + days[i]
+ ":</b><br><br>" + weatherToday + " and " +
tempToday + " degrees.</div>";

}
}
generateWeather();
//
//Opening the stand
//
/** Calculates the glasses of lemonade sold **/
function openTheStand () {
    let glassesSold = 0; //Daily
    let totalGlasses = 0; //Weekly
    let glassesLeft = 0; //Left to sell
    resetForm();
    
    //Get input
    let numGlasses = Number(document.getElementById("numGlasses").value);
    let glassPrice = Number(document.getElementById("glassPrice").value);
    for (let i = 0; i < days.length; i++) {
        //Glasses sold depends on temp and price =
        glassesSold = Math.floor(dailyTemp[i] / glassPrice);
        //How many glasses do we have now?
        glassesLeft = numGlasses - totalGlasses;
        //We cant sell more than we have
        if (glassesSold > glassesLeft) {
            glassesSold = glassesLeft;
        }
        //Increase the weekly total
        totalGlasses = glassesSold + totalGlasses;
        
        //Display daily total
        document.getElementById("result").innerHTML += "<p>" + days[i] + ", you sold " + glassesSold + " glasses of lemonade.</p>";
    }
    displayResults(numGlasses, glassPrice, totalGlasses);
}
//Resets the form so a new order can be placed
function resetForm() {
    document.getElementById("result").innerHTML = "";
}
//Calculates results and displays a result
function displayResults(weeklyInventory, glassPrice, weeklySales) {
    let revenue = weeklySales * glassPrice;
    let expense = weeklyInventory * lemonadeCost
    let leftOver = weeklyInventory - weeklySales;
    let profit = revenue - expense;
    //Print out the weekly report
    document.getElementById("result").innerHTML += "<p>You sold a total of " + weeklySales + " glasses of lemonade this week.</p>";
    document.getElementById("result").innerHTML += "<p>Total revenue: $" + revenue + ".</p>";
    document.getElementById("result").innerHTML += "<p>You have " + leftOver + " glasses of lemonade left over.</p>";
    document.getElementById("result").innerHTML += "<p>Each glass costs you $" + lemonadeCost + ". Your profit was &" + profit + ".";
}
//Listen for order
document.getElementById("OpenTheStand").addEventListener("click", openTheStand);







// let globalVar = "Accessible everywhere!";
// console.log("Outside function:", globalVar);
// function creatingNewScope(x) {
// console.log("Access to global vars inside function." , globalVar);
// }
// creatingNewScope("some parameter");
// console.log("Still available:", globalVar);