// Get the replaceButton element and add a click event listener
let replaceButton = document.getElementById("replaceButton");
replaceButton.addEventListener("click", replaceIt);

// Function to replace placeholders in the story template with input values
function replaceIt() {
    let storyDiv = document.getElementById("theStory");

    // Get values from input fields
    let adj1 = document.getElementById("adj1").value;
    let verbIng = document.getElementById("verbIng").value;
    let roomInHouse = document.getElementById("roomInHouse").value;
    let color = document.getElementById("color").value;
    let nounPlural = document.getElementById("nounPlural").value;
    let pastVerb = document.getElementById("pastVerb").value;
    let beverage = document.getElementById("beverage").value;
    let musicType = document.getElementById("musicType").value;
    let diffRoom = document.getElementById("diffRoom").value;
    let exclamation = document.getElementById("exclamation").value;
    let pastVerb2 = document.getElementById("pastVerb2").value;
    let adjDance = document.getElementById("adjDance").value;
    let animal = document.getElementById("animal").value;
    let city = document.getElementById("city").value;
    let verb = document.getElementById("verb").value;

    // Create the story template with placeholders replaced by input values
    let theStory = "<h1>Douglas's Dance Party</h1>";
    theStory += "One " + adj1 + " day, ";
    theStory += "Douglas was " + verbIng + " in his " + roomInHouse + ", ";
    theStory += "reading a book about " + color + " " + nounPlural + ".<br><br>";
    theStory += "As he " + pastVerb + " his " + beverage + ", ";
    theStory += "he heard " + musicType + " music playing in the " + diffRoom + ".<br><br>";
    theStory += exclamation + "! he exclaimed, as he " + pastVerb2 + " down the stairs to join the ";
    theStory += adjDance + " party.<br><br>";
    theStory += "Douglas danced the " + animal + " Dance, the " + city + " Shake, ";
    theStory += "and took the prize for dancing the best Electric" + verb + ".<br><br>";

    // Display the story in the designated div
    storyDiv.innerHTML = theStory;
}
