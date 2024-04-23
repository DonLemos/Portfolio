//DUMMIES CHAPTER 8
//
//Working with objects
//Creating my dream car object
//
let myDreamCar = {
    make: "Porsche",
    model: "911 Turbo S",
    colour: "Brown",
    year: "2023",
    bodyStyle: "Coupe",
    price: "4 990 000"
    };
    alert("The type of Dream Car is a: " + myDreamCar.make);
document.getElementById("pricetag").innerHTML = myDreamCar.price;
document.getElementById("modelyear").innerHTML = myDreamCar.year;
document.getElementById("body").style.backgroundColor = myDreamCar.colour;
document.getElementById("body").innerHTML = myDreamCar.make + " " + myDreamCar.model;
