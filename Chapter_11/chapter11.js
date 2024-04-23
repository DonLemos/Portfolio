//DUMMIES CHAPTER 11
//
let people = ["Mary", "Bobby", "Judy", "Eddie", "Herbie", "Tony", "Bobby"];
let otherPeople = ["Teddy", "Cathy", "G-berg", "Georgie"];

// //concat() Is a new array made up of current array and joined with other array's and/or values
// people = people.concat(otherPeople);

// //indexOf() Returns the first occurence of a specified value within the array. Will return -1 if not found
// console.log(people = people.indexOf("Eddie"));

// //join() Joins all elements of an array into a string
// console.log(people = people.join(" # "));

// //lastIndexOf() Returns the last occurance of a specified value within the array. Will return -1 if not found
// console.log(people = people.lastIndexOf("Bobby"));

// //pop() Removes the last element of an array
// console.log(people = people.pop());
// console.log(people.pop());

// //push() Add new items to the end of an array
// console.log(people = people.push("Teddy"));
// console.log(people.push("Teddy"));

// //reverse() Reverses the order of the elements in an array
// people = people.reverse();

// //shift() Removed the first element of an array and returns that element. Changes length of the array
// console.log(people.shift());

// //unshift() Returns a new array with new length by the addition of one or more elements
// console.log(people.unshift("Teddy"));

// //slice() Selects a portion of an array and returns it as a new array
// console.log(people = people.slice(0, 3));

// //sort() Returns an array after elements in the array have been sorted. (Default order is alphabetical and ascending)
// console.log(people = people.sort());

// //splice() Returns a new array comprised of elements that were added to or removed from a given array
// console.log(people.splice(1, 0, "Cathy"));

// //toString() Converts an array to a string
// console.log(people.toString())

document.getElementById("peopleIKnow").innerHTML=people.valueOf();

