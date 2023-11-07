// Lab 8 - Anon Functions and Callbacks 
// Natalya Gonzalez <naangonz@ucsc.edu>
// 11/5/23

function isOdd(x){
    return (x % 2 == 1)
} 

//test function 
console.log ("is 4 odd? ", isOdd(4));
console.log ("is 33 odd? ", isOdd(32));

array = [24, 30, 46, 72, 12, 36, 63]
console.log("My array", array);

var result = array.map(isOdd)
//should return [false, false, false, false, false. false, true]
console.log("Test of oddness of array:", result);

var result = array.map(function(x){
    return x * 2;
})

//should return [48, 60, 92, 144, 24, 72, 126]
console.log("Multiplication of array by 2:", result);


