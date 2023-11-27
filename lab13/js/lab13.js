/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Natalya Gonzalez
   Date: 11/25/23
*/

//print all the numbers from 1 to 200
for(var index=1; index<=120;index++){
    console.log(index);

//for numbers that are both multiples of both 3 and 5,
//print "FizzBuzz"
if (index%3 ==0 && index%5 ==0) {
    console.log("FizzBuzz");
    } 
 
else if (index%3 ==0) {
    console.log("Fizz");
    }
 else if (index%5 ==0) {
    console.log("Buzz");
    }
 else if (index%7 ==0) {
    console.log("Boom");
    }

str = console.log;
     str += "Fizz!";
$("#output").append("<p>" + "Fizz!" + "</p>");
     str += "Buzz!";
$("#output").append("<p>" + "Buzz!" + "</p>");
     str += "Boom!"
$("#output").append("<p>" + "Boom!" + "</p>");
     str += "FizzBoom!";
$("#output").append("<p>" + "FizzBoom!" + "</p>");
     str+= "FizzBuzz!";
$("#output").append("<p>" + "FizzBuzz!" + "</p>");
     str+= "BuzzBoom!";
$("#output").append("<p>" + "BuzzBoom!" + "</p>");
}
