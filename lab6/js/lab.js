// index.js - Experimenting with arrays and objects in javascript
// Author: Natalya Gonzalez
// Date: October 27th 2023

//Define Variables
var myTransport = ["2008 Kia Amanti", "bike", "walking", "bus"];

//create an object for my main ride
var myMainRide = {
  make: "Kia",
  model: "Amanti",
  color: "Silver",
  year: 2008,
  //we can define a function within our object (called a method)
  //that uses the value of year above (using this.year)
  age: function () {
    return 2023 - this.year;
  }

}

//output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
//this little trick allows us to write an object to the document 
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");



// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
